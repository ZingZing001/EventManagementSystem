public class Booking
{
  public int Id { get; set; }
  public int UserId { get; set; }
  public int EventId { get; set; }

  public int NumberOfTickets { get; set; }
  public User User { get; set; }
  public Event Event { get; set; }

}