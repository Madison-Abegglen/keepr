namespace keepr.Models
{
  public class Keep
  {
    public Keep(string name, string img, string description, bool isPrivate, int views)
    {
      Name = name;
      Img = img;
      Description = description;
      IsPrivate = isPrivate;
      Views = views;
    }

    public Keep() { }

    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public string UserId { get; set; }
    public string Img { get; set; }
    public bool IsPrivate { get; set; }
    public int Views { get; set; }

  }
}