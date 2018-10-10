using System.Collections.Generic;
using keepr.Models;
using keepr.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace keepr.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class KeepsController : Controller
  {
    KeepsRepository _repo;
    public KeepsController(KeepsRepository repo)
    {
      _repo = repo;
    }

    [HttpGet]
    public IEnumerable<Keep> Get()
    {
      var userId = HttpContext.User.Identity.Name;
      return _repo.GetByUserId(userId);
    }

    // [Authorize]
    // [HttpPost]
    // public Keep keep 
    // // public void Post([FromBody])

    // [HttpPut("{id}")]

    // [HttpDelete("{id}")]
  }
}