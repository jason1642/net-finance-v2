// Data/DbSeeder.cs
public static class DbSeeder
{
    public static async Task SeedAsync(AppDbContext context)
    {
        // Only seed if table is empty
        if (!context.Users.Any())
        {
            var users = new List<User>
            {
                new User { Name = "John Doe", Email = "john@email.com", Password = "password123" },
                new User { Name = "Jane Doe", Email = "jane@email.com", Password = "password123" },
                new User { Name = "Bob Smith", Email = "bob@email.com", Password = "password123" }
            };

            await context.Users.AddRangeAsync(users);
            await context.SaveChangesAsync();
        }
    }
}