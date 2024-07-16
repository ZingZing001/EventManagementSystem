// Controllers/EventsController.cs
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[Route("api/[controller]")]
[ApiController]
public class EventsController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public EventsController(ApplicationDbContext context)
    {
        _context = context;
    }

    // GET: api/Events
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Event>>> GetEvents()
    {
        return await _context.Events.ToListAsync();
    }

    // GET: api/Events/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Event>> GetEvent(int id)
    {
        var @event = await _context.Events.FindAsync(id);

        if (@event == null)
        {
            return NotFound();
        }

        return @event;
    }

    // POST: api/Events
    [HttpPost]
    public async Task<ActionResult<Event>> PostEvent(Event @event)
    {
        _context.Events.Add(@event);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetEvent", new { id = @event.Id }, @event);
    }
}

