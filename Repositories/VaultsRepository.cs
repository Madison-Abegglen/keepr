using System;
using System.Collections.Generic;
using System.Data;
using Dapper;
using keepr.Models;

namespace keepr.Repositories
{
  public class VaultsRepository
  {
    private IDbConnection _db;
    public VaultsRepository(IDbConnection db)
    {
      _db = db;
    }

    // GET ALL USER VAULTS BY USERID
    public IEnumerable<Vault> GetUserVaults(string userId)
    {
      return _db.Query<Vault>(@"
        SELECT * FROM vaults WHERE userId = @userId;
      ", new { userId });
    }

    // CREATE VAULT
    public Vault Create(Vault vault)
    {
      int id = _db.ExecuteScalar<int>(@"
        INSERT INTO vaults (name, description, userId)
        VALUES (@Name, @Description, @UserId);
        SELECT LAST_INSERT_ID();", vault
      );
      vault.Id = id;
      return vault;
    }

    // DELETE VAULT
    public void Delete(int Id)
    {
      _db.Execute("DELETE FROM vaults WHERE id = @Id", new { Id });
      return;
    }


    public IEnumerable<Keep> GetKeepsInVault(int vaultId)
    {
      return _db.Query<Keep>(@"
      SELECT * FROM vaultkeeps vk
      INNER JOIN keeps k ON k.id = vk.keepId 
      WHERE (vaultId = @vaultId)
      ", new { vaultId });
    }

    internal string AddVaultKeep(VaultKeep vaultKeep)
    {
      _db.Execute(@"
        INSERT INTO vaultkeeps (vaultId, keepId, userId)
        VALUES (@VaultId, @KeepId, @UserId);
      ", vaultKeep);
      return "SUCCESS";
    }
  }
}