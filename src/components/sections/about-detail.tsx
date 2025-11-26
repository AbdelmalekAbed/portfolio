"use client";

import { motion } from "framer-motion";
import { Award, Brain, Building2, Code, GraduationCap, Sparkles } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { certifications } from "@/data/certifications";
import { education } from "@/data/education";
import { experiences, previousExperiences } from "@/data/experience";
import { hobbies } from "@/data/hobbies";
import { skillCategories } from "@/data/skills";

export function AboutDetail() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4 py-24">
        {/* Profile Section - First thing recruiters see */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/10">
              <Image
                src="/headshot/headshot-2024.jpeg"
                alt="Abdelmalek Abed"
                fill
                sizes="192px"
                priority
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Abdelmalek Abed</h1>
              <p className="text-xl text-muted-foreground mb-4">
                Data Scientist & ML Engineer
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-primary/10">
                  <Brain className="w-3 h-3 mr-2" /> ML Expert
                </Badge>
                <Badge variant="outline" className="bg-primary/10">
                  <Building2 className="w-3 h-3 mr-2" /> NLP Specialist
                </Badge>
                <Badge variant="outline" className="bg-primary/10">
                  <Code className="w-3 h-3 mr-2" /> Python Developer
                </Badge>
                <Badge variant="outline" className="bg-primary/10">
                  <Sparkles className="w-3 h-3 mr-2" /> Data Science Expert
                </Badge>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Professional Summary - Quick overview of value proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-20"
        >
          <Card className="p-8 backdrop-blur-xl bg-card/50 border-primary/10">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Building2 className="w-6 h-6 text-primary" />
              Professional Summary
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I’m an Applied Mathematics and Modeling engineering student with a strong focus on Artificial Intelligence, Machine Learning, and Data Science. 
                I enjoy combining mathematical reasoning with practical engineering to build intelligent systems that solve real-world problems. 
                My experience includes developing reinforcement learning models for traffic optimization, deep learning solutions for medical imaging, NLP applications with BERT, and real-time computer vision and analytics dashboards. 
                I’ve also completed internships in web/data engineering and data analytics, where I built production-ready tools that improved workflow efficiency, data accessibility, and team productivity.
              </p>
              <p>
                My expertise spans across advanced NLP model development, machine learning pipeline
                implementation, and full-stack development using modern web technologies. I have
                hands-on experience with React.js, PHP, Java/JEE, and C/C++, enabling me to build
                complete solutions from data processing to user-facing applications. I&apos;ve
                successfully delivered projects in text classification, predictive maintenance,
                automated essay scoring, and fraud detection systems.
              </p>
              <p>
                With a strong foundation in Applied Mathematics and Statistics, combined with practical
                software engineering experience, I excel at bridging the gap between data science and
                production systems. I&apos;m passionate about advancing AI technologies and developing
                solutions that combine cutting-edge ML techniques with robust software engineering
                practices to enable operational excellence and innovation.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Code className="w-8 h-8 text-primary" />
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category) => (
              <Card
                key={category.name}
                className="p-6 backdrop-blur-xl bg-card/50 border-primary/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <category.Icon className={`w-6 h-6 ${category.color}`} />
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className={`${category.color}`}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Work Experience - Most important for recruiters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Building2 className="w-8 h-8 text-primary" />
            Work Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp) => (
              <Card
                key={`${exp.title}-${exp.startDate}`}
                className="p-6 backdrop-blur-xl bg-card/50 border-primary/10"
              >
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-primary">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">
                      {exp.location}
                      {exp.isRemote ? " (Remote)" : ""}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {exp.startDate} - {exp.endDate}
                  </p>
                </div>
                <ul className="space-y-2 text-muted-foreground ml-4">
                  {exp.achievements.map((achievement) => (
                    <li key={`${exp.title}-${achievement.text}`} className="flex">
                      <span className="mr-2">•</span>
                      <span className="flex-1">{achievement.text}</span>
                    </li>
                  ))}
                </ul>
                {exp.skills.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge
                        key={`${exp.title}-${skill.name}`}
                        variant="outline"
                        className="bg-primary/5"
                      >
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                )}
              </Card>
            ))}

            <Card className="p-6 backdrop-blur-xl bg-card/50 border-primary/10">
              <h3 className="text-xl font-semibold mb-4">Previous Experience</h3>
              <div className="space-y-4">
                {previousExperiences.map((exp) => (
                  <div key={`${exp.title}-${exp.startDate}`}>
                    <div className="flex justify-between mb-2">
                      <p className="font-medium">{exp.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {exp.startDate} - {exp.endDate}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </motion.div>

        {/* Certifications - Shows current skills and continuous learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Award className="w-8 h-8 text-primary" />
            My Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <motion.div key={cert.name} whileHover={{ scale: 1.02 }} className="relative">
                <Card className="p-6 backdrop-blur-xl bg-card/50 border-primary/10 hover:border-primary/30 transition-colors">
                  <div className="flex flex-col gap-4">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4"
                    >
                      <Image
                        src={cert.image}
                        alt={cert.name}
                        width={60}
                        height={60}
                        className="rounded-lg"
                      />
                      <div>
                        <h3 className="font-semibold mb-1">{cert.name}</h3>
                        <p className="text-sm text-muted-foreground">{cert.issuedBy}</p>
                        <p className="text-sm text-muted-foreground">Issued: {cert.issuedDate}</p>
                      </div>
                    </a>

                    {cert.earlyAdopterBadge && (
                      <>
                        <div className="border-t border-primary/10 my-2" />
                        <a
                          href={cert.earlyAdopterBadge.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3"
                        >
                          <Image
                            src={cert.earlyAdopterBadge.image}
                            alt={cert.earlyAdopterBadge.name}
                            width={40}
                            height={40}
                            className="rounded-lg"
                          />
                          <div>
                            <Badge variant="outline" className="bg-primary/5 mb-1">
                              Early Adopter
                            </Badge>
                            <p className="text-xs text-muted-foreground">
                              {cert.earlyAdopterBadge.name}
                            </p>
                          </div>
                        </a>
                      </>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education - Supporting qualifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-20"
        >
          <Card className="p-8 backdrop-blur-xl bg-card/50 border-primary/10">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" />
              Education
            </h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index}>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-lg">{edu.degree}</h3>
                      <p className="text-muted-foreground">{edu.school}</p>
                    </div>
                    <div className="text-right mt-1 md:mt-0">
                      <p className="text-sm text-muted-foreground">
                        {edu.startDate} - {edu.endDate}
                      </p>
                      {edu.gpa && <p className="text-sm font-medium text-primary">GPA: {edu.gpa}</p>}
                    </div>
                  </div>
                  {edu.honors.length > 0 && (
                    <div className="mt-3">
                      {edu.honors.map((honor, honorIndex) => (
                        <Badge
                          key={honor.name}
                          variant="outline"
                          className={`bg-primary/5 mb-2 ${honorIndex > 0 ? "ml-2" : ""}`}
                        >
                          {honor.name}
                        </Badge>
                      ))}
                    </div>
                  )}
                  {edu.activities.length > 0 && (
                    <div className="mt-4">
                      <p className="text-sm font-medium mb-2">Activities and Societies:</p>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                        {edu.activities.map((activity) => (
                          <li key={activity.name}>{activity.name}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Hobbies & Interests - Personal side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="p-8 backdrop-blur-xl bg-card/50 border-primary/10">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-primary"
              >
                <title>Creative pursuits icon</title>
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              Hobbies & Interests
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hobbies.map((hobby) => (
                <div key={hobby.name} className="space-y-2">
                  <Badge variant="outline" className="bg-primary/5 text-base py-2 px-3">
                    {hobby.emoji} {hobby.name}
                  </Badge>
                  <p className="text-sm text-muted-foreground pl-2">{hobby.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
