using System.Collections.Generic;
using System.Data;
using Dapper;
using keepr.Models;

namespace keepr.Repositories
{
  public class KeepsRepository
  {
    private IDbConnection _db;

    public KeepsRepository(IDbConnection db)
    {
      _db = db;
    }

    // GET ALL PUBLIC KEEPS

    // GET ALL USER KEEPS
    public IEnumerable<Keep> GetByUserId(string userId)
    {
      return _db.Query<Keep>(@"
        SELECT * FROM keeps WHERE userId = @userId;
      ", new { userId });
    }

    // GET KEEP BY ID


    // CREATE KEEP 


    // UPDATE KEEP 


    // DELETE KEEP 
  }
}