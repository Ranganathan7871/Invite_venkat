import { Calendar, Users, UtensilsCrossed, Music, Sparkles } from 'lucide-react';

const Schedule = () => {
  const events = [
    {
      title: 'Welcome & Arrival',
      description: 'Guests arrival and welcome refreshments',
      icon: Users,
      color: 'text-primary'
    },
    {
      title: 'Reception Ceremony',
      description: 'Sacred blessings and celebrations',
      icon: Calendar,
      color: 'text-romantic'
    },
    {
      title: 'Dinner Reception',
      description: 'Celebration feast with family and friends',
      icon: UtensilsCrossed,
      color: 'text-primary'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-elegant">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-heading font-semibold text-foreground mb-6">
            Reception Schedule
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A timeline of our special day's celebrations
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-celebration to-romantic"></div>

          <div className="space-y-8">
            {events.map((event, index) => {
              const IconComponent = event.icon;
              return (
                <div
                  key={index}
                  className="relative flex items-start animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 bg-card shadow-romantic rounded-full flex items-center justify-center border-2 border-primary/20">
                      <IconComponent className={`w-4 h-4 sm:w-6 sm:h-6 ${event.color}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="ml-6 sm:ml-8 flex-1">
                    <div className="bg-card/80 backdrop-blur-sm shadow-romantic rounded-2xl p-6 border border-border/50 hover:shadow-elegant transition-shadow duration-300">
                      <div className="mb-3">
                        <h3 className="text-xl font-heading font-semibold text-foreground">
                          {event.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="bg-gradient-romantic rounded-2xl p-8 shadow-elegant">
            <p className="text-lg text-romantic-foreground/90 mb-4">
              We can't wait to celebrate with you!
            </p>
            <p className="text-sm text-romantic-foreground/70">
              Please arrive by 5:30 PM to join us from the very beginning of our celebration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;