import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Users, Target, TrendingUp } from 'lucide-react';
import { Button } from '../components/Button';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { AnimatedCounter } from '../components/AnimatedCounter';

export const Home = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen">
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(1, 50, 32, 0.7), rgba(1, 50, 32, 0.7)), url(https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg)',
        }}
      >
        <div className="container mx-auto px-4 text-center text-white z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Planting Hope, Growing Futures
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Empowering youth, helping the needy, and strengthening communities across Rwanda
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/get-involved">
              <Button size="lg" variant="primary">
                Join Us <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/get-involved">
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                Donate Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div {...fadeIn} className="text-center">
            <div className="bg-primary text-accent w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-10 h-10" />
            </div>
            <h3 className="text-4xl font-bold text-primary mb-2">
              <AnimatedCounter target={10000} suffix="+" />
            </h3>
            <p className="text-gray-600">Youth Reached</p>
          </motion.div>

          <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="text-center">
            <div className="bg-primary text-accent w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-10 h-10" />
            </div>
            <h3 className="text-4xl font-bold text-primary mb-2">
              <AnimatedCounter target={50} suffix="+" />
            </h3>
            <p className="text-gray-600">Projects Completed</p>
          </motion.div>

          <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="text-center">
            <div className="bg-primary text-accent w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-10 h-10" />
            </div>
            <h3 className="text-4xl font-bold text-primary mb-2">
              <AnimatedCounter target={3} />
            </h3>
            <p className="text-gray-600">Active Chapters</p>
          </motion.div>

          <motion.div {...fadeIn} transition={{ delay: 0.3 }} className="text-center">
            <div className="bg-primary text-accent w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-10 h-10" />
            </div>
            <h3 className="text-4xl font-bold text-primary mb-2">
              <AnimatedCounter target={5} />
            </h3>
            <p className="text-gray-600">Years of Impact</p>
          </motion.div>
        </div>
      </Section>

      <Section dark>
        <motion.div {...fadeIn} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Mission</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            To empower young people with the tools, knowledge, and opportunities they need to create positive change in their communities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div {...fadeIn} transition={{ delay: 0.1 }}>
            <Card className="h-full p-6 bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="text-accent text-4xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold mb-3 text-white">Youth Empowerment</h3>
              <p className="text-gray-300">
                Providing skills training, mentorship, and leadership development programs to help young people reach their full potential
              </p>
            </Card>
          </motion.div>

          <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
            <Card className="h-full p-6 bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="text-accent text-4xl mb-4">❤️</div>
              <h3 className="text-2xl font-bold mb-3 text-white">Community Support</h3>
              <p className="text-gray-300">
                Supporting vulnerable families and individuals through charity programs, relief efforts, and sustainable development initiatives
              </p>
            </Card>
          </motion.div>

          <motion.div {...fadeIn} transition={{ delay: 0.3 }}>
            <Card className="h-full p-6 bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="text-accent text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold mb-3 text-white">Collaboration</h3>
              <p className="text-gray-300">
                Building partnerships with local organizations, schools, and businesses to create lasting impact across Rwanda
              </p>
            </Card>
          </motion.div>
        </div>
      </Section>

      <Section>
        <motion.div {...fadeIn} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Latest Impact</h2>
          <p className="text-xl text-gray-600">See how we're making a difference in communities across Rwanda</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div {...fadeIn} transition={{ delay: 0.1 }}>
            <Card>
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg"
                alt="Skills training"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">Skills Training Workshop</h3>
                <p className="text-gray-600">
                  Over 100 youth participated in our latest digital literacy and entrepreneurship training program
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
            <Card>
              <img
                src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg"
                alt="Charity drive"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">Annual Charity Drive</h3>
                <p className="text-gray-600">
                  Reached 500+ families with essential supplies, food, and educational materials
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div {...fadeIn} transition={{ delay: 0.3 }}>
            <Card>
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
                alt="Youth forum"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">Youth Leadership Forum</h3>
                <p className="text-gray-600">
                  Young leaders from all chapters gathered to share experiences and plan future initiatives
                </p>
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.div {...fadeIn} className="text-center mt-12">
          <Link to="/events">
            <Button variant="secondary" size="lg">
              View All Events <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </Section>
    </div>
  );
};
