import Button from '@/components/ui/Button'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient or image */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-red-active/10 -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge or label */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm mb-6">
            <span className="w-2 h-2 bg-orange-btn rounded-full animate-pulse" />
            New: DevStacked Magazine 2.0
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Build the Future of
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-btn to-red-active">
              {' '}Development
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of developers creating amazing projects with our 
            cutting-edge tools and resources.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="primary" size="lg">
              Get Started Free
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              rightIcon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            >
              Watch Demo
            </Button>
          </div>

          {/* Social proof or stats */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/60 text-sm">
            <div>
              <span className="block text-2xl font-bold text-white">50K+</span>
              Active Users
            </div>
            <div>
              <span className="block text-2xl font-bold text-white">100K+</span>
              Projects Built
            </div>
            <div>
              <span className="block text-2xl font-bold text-white">4.9/5</span>
              User Rating
            </div>
          </div>
        </div>
      </div>

      {/* Optional: Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}