public class Event
{
  public int Id { get; set; }
  public required string Name { get; set; }
  public string? Description { get; set; } // Now nullable
  public DateTime Date { get; set; }
  public required string Location { get; set; }  
}