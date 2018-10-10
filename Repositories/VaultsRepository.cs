using System.Data;

namespace keepr.Repositories
{
  public class VaultsRepository
  {
    private IDbConnection _db;
    public VaultsRepository(IDbConnection db)
    {
      _db = db;
    }
  }
}