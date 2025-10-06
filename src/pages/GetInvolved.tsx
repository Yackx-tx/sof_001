import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Heart, Users, Handshake } from 'lucide-react';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { supabase, VolunteerApplication } from '../lib/supabase';

export const GetInvolved = () => {
  const [activeTab, setActiveTab] = useState<'volunteer' | 'donate'>('volunteer');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<VolunteerApplication>();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const onSubmit = async (data: VolunteerApplication) => {
    setSubmitting(true);
    try {
      const { error } = await supabase
        .from('volunteer_applications')
        .insert([data]);

      if (error) throw error;

      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('There was an error submitting your application. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <section
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(1, 50, 32, 0.8), rgba(1, 50, 32, 0.8)), url(https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg)',
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Get Involved
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Join our mission to empower youth and strengthen communities across Rwanda
          </motion.p>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div {...fadeIn}>
            <Card className="h-full p-6 text-center">
              <div className="bg-primary text-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Volunteer</h3>
              <p className="text-gray-600">
                Share your time and skills to make a direct impact in communities across Rwanda
              </p>
            </Card>
          </motion.div>

          <motion.div {...fadeIn} transition={{ delay: 0.1 }}>
            <Card className="h-full p-6 text-center">
              <div className="bg-primary text-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Donate</h3>
              <p className="text-gray-600">
                Support our programs and help us reach more young people in need of opportunities
              </p>
            </Card>
          </motion.div>

          <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
            <Card className="h-full p-6 text-center">
              <div className="bg-primary text-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Partner</h3>
              <p className="text-gray-600">
                Collaborate with us to create sustainable solutions for youth empowerment
              </p>
            </Card>
          </motion.div>
        </div>

        <motion.div {...fadeIn} className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-lg bg-gray-200 p-1">
              <button
                onClick={() => setActiveTab('volunteer')}
                className={`px-8 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === 'volunteer' ? 'bg-primary text-white' : 'text-gray-700 hover:text-primary'
                }`}
              >
                Volunteer Application
              </button>
              <button
                onClick={() => setActiveTab('donate')}
                className={`px-8 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === 'donate' ? 'bg-primary text-white' : 'text-gray-700 hover:text-primary'
                }`}
              >
                Make a Donation
              </button>
            </div>
          </div>

          <Card className="p-8">
            {activeTab === 'volunteer' ? (
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Volunteer With Us</h2>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6"
                  >
                    Thank you for your application! We'll be in touch soon.
                  </motion.div>
                )}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register('name', { required: 'Name is required' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      {...register('phone')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="chapter" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Chapter *
                    </label>
                    <select
                      id="chapter"
                      {...register('chapter', { required: 'Please select a chapter' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select a chapter</option>
                      <option value="Kigali">Kigali Chapter</option>
                      <option value="Huye">Huye Chapter</option>
                      <option value="Musanze">Musanze Chapter</option>
                    </select>
                    {errors.chapter && <p className="text-red-600 text-sm mt-1">{errors.chapter.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Why do you want to volunteer? *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      {...register('message', { required: 'Please tell us why you want to volunteer' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>}
                  </div>

                  <Button type="submit" variant="secondary" size="lg" className="w-full" disabled={submitting}>
                    {submitting ? 'Submitting...' : 'Submit Application'}
                  </Button>
                </form>
              </div>
            ) : (
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Support Our Work</h2>
                <p className="text-gray-600 mb-6">
                  Your donations help us provide education, skills training, and essential support to youth and communities across Rwanda.
                </p>
                <div className="bg-accent/10 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-bold text-primary mb-4">Bank Transfer Details</h3>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Bank:</strong> Bank of Kigali</p>
                    <p><strong>Account Name:</strong> Seeds of the Future</p>
                    <p><strong>Account Number:</strong> 1234567890</p>
                    <p><strong>SWIFT Code:</strong> BKIGFRKA</p>
                  </div>
                </div>
                <div className="bg-primary/10 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-bold text-primary mb-4">Mobile Money</h3>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>MTN Mobile Money:</strong> *182*8*1*123456#</p>
                    <p><strong>Airtel Money:</strong> *500*1*123456#</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 text-center">
                  For international donations or questions about other giving options, please contact us at{' '}
                  <a href="mailto:donations@seedsofthefuture.rw" className="text-primary hover:text-primary-light">
                    donations@seedsofthefuture.rw
                  </a>
                </p>
              </div>
            )}
          </Card>
        </motion.div>
      </Section>
    </div>
  );
};
