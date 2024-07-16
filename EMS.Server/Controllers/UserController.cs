using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


[Route("api/[controller]")]
[ApiController]
public class UsersController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public UsersController(ApplicationDbContext context)
    {
        _context = context;
    }

    // GET: api/Users/profile
    [HttpGet("profile")]
    public async Task<ActionResult<User>> GetUserProfile()
    {
        // Replace with actual logic to get the current user profile
        var user = await _context.Users.FirstOrDefaultAsync();

        if (user == null)
        {
            return NotFound();
        }

        return user;
    }
}
