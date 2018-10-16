<template>
  <div>

  <div class="keeps-container">
    <v-card v-for="keep in keeps" :key="keep.id" class="keep-card" hover> 
      <v-img 
        :src="keep.img" 
        aspect-ratio="1.5" 
        class="keep-img"
      >
      <div>
        <v-btn @click="viewKeep(keep)" class="keep-card-actions" fab>
          <v-icon color="#e71d36">visibility</v-icon>
        </v-btn>
        <v-btn v-if="user.id" @click="addKeep(keep)" class="keep-card-actions" fab>
          <v-icon color="#e71d36">save_alt</v-icon>
        </v-btn>
        <v-btn class="keep-card-actions" fab>
          <v-icon color="#e71d36">share</v-icon>
        </v-btn>
      </div>
      </v-img>

      <v-card-title primary-title>
        <div>
          <h4 class="keep-name">{{keep.name}}</h4>
          <p class="keep-description">{{keep.description}}</p>
        </div>
      </v-card-title>
    </v-card>
  </div>

   <!--EDIT KEEP DIALOG -->
      <v-dialog v-model="editKeepDialogVal" width="800">
        <v-card class="form">
          <v-card-title class="upper">Edit this keep</v-card-title>

          <v-divider color="#2ec4b6"></v-divider>

          <v-text-field label="Title" v-model="editKeepDialog.name"></v-text-field>
          <v-text-field label="Img Link" v-model="editKeepDialog.img"></v-text-field>
          <v-text-field label="Description" v-model="editKeepDialog.description"></v-text-field>
          <v-checkbox label="Make Keep Private" v-model="editKeepDialog.isPrivate"></v-checkbox>

          <v-card-actions>
            <v-btn type="submit" @click="editKeep(keep); editKeepDialogVal = false;" class="upper">edit keep</v-btn>
            <v-btn @click="editKeepDialogVal = false" class="upper">cancel</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
 <!-- VIEW KEEP DIALOG -->
      <v-dialog v-model="viewKeepDialogVal" width="800">
        <v-card class="view-keep-card">
          <v-img 
            :src="activeKeep.img"
            aspect-ratio="2"
          >
          </v-img>
          
          <v-card-title primary-title class="activeKeep-title">
            <div>
              <h4 class="activeKeep-name">{{activeKeep.name}}</h4>
              <p class="activeKeep-description">{{activeKeep.description}}</p>
            </div>

            
              <p class="activeKeep-views">
                Views: {{activeKeep.views}}
                <v-icon class="view-icon">visibility</v-icon>
              </p>
          </v-card-title>

          <v-card-actions v-if="activeKeep.userId == user.id">
            <v-btn @click="editKeepDialogVal = true" class="activeKeep-edit">
              Edit
              <v-icon>edit</v-icon>
            </v-btn>

            <v-btn @click="deleteKeepDialogVal = true" class="activeKeep-delete"> 
              Delete
              <v-icon class="delete-icon">delete</v-icon>
            </v-btn>
          </v-card-actions>
              
            

        </v-card>
      </v-dialog>
    <!-- DELETE KEEP DIALOG -->      
  <v-dialog v-model="deleteKeepDialogVal" width="800">
    <v-card class="form upper">
      <v-card-title> Warning! </v-card-title>

      <v-divider color="#2ec4b6"></v-divider>

      <v-card-text>Are you sure you want to delete this keep?</v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="deleteKeepDialogVal = false" class="upper">Cancel</v-btn>
        <v-btn @click="deleteKeep(activeKeep)" class="upper">Delete</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <vault-keep :active-keep="keepToAdd" />

  </div>
</template>

<script>
import VaultKeep from "./VaultKeep";
export default {
  name: "keeps",
  props: ["keeps"],
  data() {
    return {
      activeKeep: {},
      keepToAdd: {},
      editKeepDialogVal: false,
      viewKeepDialogVal: false,
      deleteKeepDialogVal: false,
      newKeepDialog: {
        name: "",
        img: "",
        description: "",
        isPrivate: false
      },
      editKeepDialog: {
        name: "",
        img: "",
        description: "",
        isPrivate: false
      }
    };
  },
  methods: {
    editKeep(keep) {
      this.editKeepDialogVal = false;
      this.$store.dispatch("editKeep", keep);
    },
    viewKeep(keep) {
      this.activeKeep = keep;
      this.viewKeepDialogVal = true;
      // make put request to increment views
      this.$store.dispatch("incrementViews", this.activeKeep);
    },
    deleteKeep(keep) {
      this.$store.dispatch("deleteKeep", keep);
      this.deleteKeepDialogVal = false;
      this.viewKeepDialogVal = false;
    },
    addKeep(keep) {
      this.keepToAdd = keep;
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  components: {
    VaultKeep
  }
};
</script>

