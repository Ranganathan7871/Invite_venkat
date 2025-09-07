import CountdownTimer from './CountdownTimer';
import weddingBg from '@/assets/wedding-bg.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${weddingBg})` }}
      >
        <div className="absolute inset-0 bg-background/20 backdrop-blur-[1px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          {/* Names */}
          <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl font-semibold text-foreground mb-6 tracking-tight">
            Venkat
            <span className="block text-4xl sm:text-5xl lg:text-6xl text-primary mt-2 font-light">
              &
            </span>
            <span className="block">Haripriya</span>
          </h1>

          {/* Wedding Date */}
          <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg sm:text-xl text-muted-foreground font-medium mb-2">
              Together with our families, we invite you to celebrate our wedding
            </p>
            <div className="bg-card/80 backdrop-blur-sm shadow-romantic rounded-2xl p-6 border border-border/50 inline-block">
              <p className="text-2xl sm:text-3xl font-heading text-primary font-semibold">
                November 15, 2024
              </p>
              <p className="text-base sm:text-lg text-muted-foreground mt-1">
                6:00 PM onwards
              </p>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-xl sm:text-2xl font-heading text-foreground mb-6 font-medium">
              Counting down to our special day
            </h2>
            <CountdownTimer />
          </div>

          {/* Scroll Indicator */}
          <div className="animate-float mt-12">
            <div className="inline-flex items-center text-muted-foreground">
              <span className="text-sm font-medium mr-2">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
                <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;