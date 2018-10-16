using System;
using System.Collections.Generic;
using keepr.Models;
using keepr.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace keepr.Controllers
{
  [Route("api/[controller]")]
  [Authorize]
  [ApiController]
  public class VaultsController : Controller
  {
    VaultsRepository _repo;
    public VaultsController(VaultsRepository repo)
    {
      _repo = repo;
    }

    [HttpGet]
    public IEnumerable<Vault> Get()
    {
      var userId = HttpContext.User.Identity.Name;
      return _repo.GetUserVaults(userId);
    }


    [HttpPost]
    public Vault Post([FromBody] Vault vault)
    {
      if (ModelState.IsValid)
      {
        vault.UserId = HttpContext.User.Identity.Name;
        return _repo.Create(vault);
      }
      throw new Exception("INVALID VAULT");
    }

    [HttpPut]
    public string Put([FromBody] VaultKeep vaultKeep)
    {
      if (ModelState.IsValid)
      {
        return _repo.AddVaultKeep(vaultKeep);
      }
      return "BAD REQUEST";
    }

    [HttpGet("{id}")]
    public IEnumerable<Keep> GetVault(int id)
    {
      return _repo.GetKeepsInVault(id);
    }


    [HttpDelete("{vaultId}")]
    public void Delete(int vaultId)
    {
      _repo.Delete(vaultId);
      return;
    }
  }
}