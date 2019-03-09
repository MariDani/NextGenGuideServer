-- create db
CREATE DATABASE "next-gen-guide-development" TEMPLATE template0;

-- in psql, you can connect to the new db with: \c "next-gen-guide-development"
-- Delete old table and its data with: DROP TABLE absolvents;

-- Create table
CREATE TABLE mentors (first_name varchar(40),
  id SERIAL PRIMARY KEY,
  last_name varchar(40),
  high_school_name varchar(40),
  maturita_year integer,
  high_school_abroad varchar(40),
  high_school_abroad_country varchar(40),
  university_1_name varchar(40),
  university_1_country varchar(40),
  university_1_program varchar(40),
  university_1_grad_year integer,
  university_2_name varchar(40),
  university_2_country varchar(40),
  university_2_program varchar(40),
  university_2_grad_year integer,
  university_3_name varchar(40),
  university_3_country varchar(40),
  university_3_program varchar(40),
  university_3_grad_year integer,
  working_industry varchar(40),
  role varchar(40),
  company varchar(40),
  country varchar(40),
  previous_role varchar(40),
  previous_company varchar(40),
  previous_country varchar(40),
  image_url varchar(100),
  email varchar(40),
  description varchar(1200));

CREATE TABLE mentees (first_name varchar(40),
  id SERIAL PRIMARY KEY,
  last_name varchar(40),
  high_school_name varchar(40),
  maturita_year integer,
  fields_of_interest text[],
  email varchar(40));

-- Insert some values
INSERT INTO mentors VALUES ('Zuzana',
  DEFAULT,
  'Arnoldova',
  'Gymnazium na Zatlance',
  2009,
  null,
  null,
  'Karlova Univerzita',
  'Ceska republika',
  'Sociologie',
  '2012',
  'Goteborg University',
  'Sweden',
  'European Studies',
  null,
  'Unicorn College',
  'Ceska republika',
  'Software Engineering',
  null,
  'IT',
  'Software Developer',
  'MSD',
  'Ceska republika',
  'Software Developer',
  'Leedfeader',
  'Finland',
  'https://drive.google.com/uc?id=1Vu2w7yZQXHWvL6-zrMmATT6v2kf_1mU9',
  'zuzana@gmail.com',
  'Zuzana works as a programmer currently in pharmacological industry. She codes in Javascript both frontend and backend. While she started studying Software Engineering at Unicorn College, she didn’t finish it and considers herself as self-learner. In fact, before she started with coding, Zuzana studied Sociology at Charles University. During her studies she also completed a one year exchange program at the Gothenburg University in Sweden. When she was attending high school, her dream was to be a teacher. She enjoys explaining complex problems in a simple way. She was involved in teaching a web development as a volunteer for Czechitas (Czech NGO) for a very long time. Zuzana is an everlasting student, who believes it is never too late to learn new skills or to completely change a career, which she demonstrated by switching from Sociology to Software Development.');

-- Insert some other values
INSERT INTO mentors VALUES ('Mariana',
  DEFAULT,
  'Danielová',
  'Gymnázium na Zatlance',
  2009,
  null,
  null,
  'Karlova Univerzita',
  'Czech republic',
  'Geography and Cartography',
  2012,
  'Technische Universität München',
  'Germany',
  'Cartography',
  2014,
  null,
  null,
  null,
  null,
  'Laser Reasearch',
  'Scientific Data Visualization',
  'ELI Beamlines',
  'Czech republic',
  'Technical Director',
  'AccuEarth',
  'Czech republic',
  'https://drive.google.com/uc?id=1ye45ZweZr0ib5q1FGLcgWU-iMNIPpOGN',
  'mariana@gmail.com',
  'Mariana is a graduate of a bachelor degree in Cartography and Geography at Charles University in Prague and of an international Cartography Master Program held by technical universities in Munich, Vienna and Dresden. After graduation, Mariana worked three years for GIS (Geographic Information System) company AccuEarth as a Technical Director. She led the entire technical department and was responsible for the quality enhancement of GIS products (i.e. satellite imagery). In 2017 Mariana started working for European Laser Research Facility ELI Beamlines. Besides developing custom visualization tools, she creates user friendly visual outputs from big data produced by theoretical physicists. When she was a little girl, she hoped not to end up in Science like a half of her family did. But as it turns out, she happily works for laser research facility now, even though she hardly knows how lasers work.');


INSERT INTO mentees VALUES ('John',
  DEFAULT,
  'Doe',
  'Gymnazium Boticska',
  '2019',
  '{Biology, Zoology, Astronomy}',
  'john.doe@email.com');

