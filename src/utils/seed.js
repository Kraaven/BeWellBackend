import Disease from '../models/Disease.js';
import Post from '../models/Post.js';
import { v4 as uuidv4 } from 'uuid';

export const seedDiseases = async () => {
  try {
    const count = await Disease.countDocuments();
    if (count > 0) {
      console.log('Database already seeded with diseases');
      return;
    }

    const diseases = [
      {
        name: 'Depression',
        overview: {
          description: 'Depression is a mood disorder that causes a persistent feeling of sadness and loss of interest.',
          causes: ['Biological factors', 'Brain chemistry', 'Hormonal imbalances', 'Genetics', 'Trauma', 'Chronic stress'],
          risk_factors: ['Family history of depression', 'Substance abuse', 'Chronic illness', 'Traumatic events', 'Low self-esteem']
        },
        symptoms: [
          'Persistent sad or anxious mood',
          'Loss of interest or pleasure in activities',
          'Fatigue or low energy',
          'Appetite or weight changes',
          'Insomnia or oversleeping',
          'Feelings of worthlessness or guilt',
          'Difficulty concentrating or making decisions',
          'Thoughts of death or suicide'
        ],
        diagnosis: {
          criteria: 'Symptoms must be present for at least two weeks and cause significant distress or impairment',
          methods: ['Clinical interview', 'Psychological evaluation', 'Patient questionnaires', 'Physical exam to rule out other causes']
        },
        treatment: [
          { Psychotherapy: 'Cognitive Behavioral Therapy (CBT), Interpersonal Therapy (IPT)' },
          { Medication: 'Selective Serotonin Reuptake Inhibitors (SSRIs), SNRIs, TCAs' },
          { Lifestyle: 'Exercise, sleep regulation, stress reduction, social support' },
          { Alternative: 'Meditation, yoga, acupuncture, mindfulness practices' }
        ],
        prevalence: {
          global: 'Approximately 280 million people affected worldwide',
          by_region: {
            Africa: '75.6 million people',
            Asia: '145.7 million people',
            Europe: '31.5 million people',
            NorthAmerica: '16.3 million people',
            SouthAmerica: '17.2 million people',
            Oceania: '1.8 million people'
          }
        },
        last_updated: new Date()
      },
      {
        name: 'Anxiety',
        overview: {
          description: 'Anxiety disorders are characterized by excessive fear or worry that interferes with daily life.',
          causes: ['Genetic predisposition', 'Brain chemistry', 'Environmental stress', 'Personality traits'],
          risk_factors: ['Childhood trauma', 'Chronic illness', 'Stressful life events', 'Substance use', 'Other mental disorders']
        },
        symptoms: [
          'Excessive worrying',
          'Feeling restless or on-edge',
          'Irritability',
          'Difficulty concentrating',
          'Fatigue',
          'Sleep disturbances',
          'Muscle tension',
          'Panic attacks'
        ],
        diagnosis: {
          criteria: 'Persistent and excessive worry occurring more days than not for at least 6 months',
          methods: ['Clinical assessment', 'Self-reported questionnaires', 'Medical evaluation']
        },
        treatment: [
          { Psychotherapy: 'Cognitive Behavioral Therapy (CBT), Exposure Therapy' },
          { Medication: 'SSRIs, benzodiazepines (short-term), beta-blockers' },
          { Lifestyle: 'Regular physical activity, improved sleep habits, reduced caffeine/alcohol' },
          { Relaxation: 'Deep breathing, mindfulness, progressive muscle relaxation' }
        ],
        prevalence: {
          global: 'Approximately 301 million people affected globally',
          by_region: {
            Africa: '56.0 million people',
            Asia: '136.3 million people',
            Europe: '29.3 million people',
            NorthAmerica: '18.9 million people',
            SouthAmerica: '16.3 million people',
            Oceania: '1.8 million people'
          }
        },
        last_updated: new Date(),
      },
      {
        name: 'Bipolar Disorder',
        overview: {
          description: 'Bipolar disorder is characterized by alternating periods of elevated mood (mania or hypomania) and depression.',
          causes: ['Genetic factors', 'Neurochemical imbalances', 'Environmental triggers', 'Altered brain structure'],
          risk_factors: ['Family history', 'High stress', 'Trauma', 'Drug or alcohol abuse', 'Major life changes']
        },
        symptoms: [
          'Manic episodes with elevated mood',
          'Increased energy and activity',
          'Racing thoughts',
          'Reduced need for sleep',
          'Depressive episodes',
          'Impaired judgment',
          'Impulsivity',
          'Suicidal thoughts during depressive episodes'
        ],
        diagnosis: {
          criteria: 'Presence of at least one manic/hypomanic episode, often with depressive episodes',
          methods: ['Psychiatric evaluation', 'Mood charting', 'Medical tests to rule out other conditions', 'Mental health screening']
        },
        treatment: [
          { Medication: 'Mood stabilizers, antipsychotics, antidepressants' },
          { Psychotherapy: 'Cognitive Behavioral Therapy (CBT), Interpersonal Therapy' },
          { Support: 'Psychoeducation, support groups' },
          { Lifestyle: 'Regular sleep schedule, stress management, avoiding substance use' }
        ],
        prevalence: {
          global: 'Approximately 45 million people affected worldwide',
          by_region: {
            Africa: '6.3 million people',
            Asia: '21.2 million people',
            Europe: '5.4 million people',
            NorthAmerica: '6.8 million people',
            SouthAmerica: '4.5 million people',
            Oceania: '0.8 million people'
          }
        },
        last_updated: new Date()
      },
      {
        name: 'Post-Traumatic Stress Disorder (PTSD)',
        overview: {
          description: 'PTSD is a condition triggered by experiencing or witnessing traumatic events, causing lasting psychological distress.',
          causes: ['Exposure to traumatic events', 'History of other mental health issues', 'Neurobiological factors'],
          risk_factors: ['Combat exposure', 'Childhood abuse', 'Sexual assault', 'Natural disasters', 'Life-threatening accidents']
        },
        symptoms: [
          'Intrusive memories or flashbacks',
          'Nightmares related to trauma',
          'Severe emotional distress',
          'Avoidance of trauma reminders',
          'Negative changes in thinking and mood',
          'Hyperarousal and reactivity',
          'Sleep disturbances',
          'Emotional numbness'
        ],
        diagnosis: {
          criteria: 'Symptoms lasting more than one month following exposure to traumatic event(s)',
          methods: ['Clinical interview', 'Psychological assessment tools', 'Medical evaluation']
        },
        treatment: [
          { Psychotherapy: 'Trauma-focused CBT, EMDR (Eye Movement Desensitization and Reprocessing), Prolonged Exposure therapy' },
          { Medication: 'SSRIs, SNRIs, prazosin for nightmares' },
          { Support: 'Support groups, family therapy' },
          { Alternative: 'Stress management techniques, mindfulness practices' }
        ],
        prevalence: {
          global: 'Approximately 170 million people affected worldwide',
          by_region: {
            Africa: '30.6 million people',
            Asia: '76.5 million people',
            Europe: '20.4 million people',
            NorthAmerica: '23.8 million people',
            SouthAmerica: '15.3 million people',
            Oceania: '3.4 million people'
          }
        },
        last_updated: new Date()
      },
      {
        name: 'Schizophrenia',
        overview: {
          description: 'Schizophrenia is a chronic mental disorder that affects how a person thinks, feels, and behaves, causing disconnect from reality.',
          causes: ['Genetic factors', 'Brain chemistry', 'Environmental factors', 'Neurodevelopmental abnormalities'],
          risk_factors: ['Family history', 'Pregnancy and birth complications', 'Childhood trauma', 'Psychoactive drug use']
        },
        symptoms: [
          'Hallucinations',
          'Delusions',
          'Disorganized thinking and speech',
          'Abnormal motor behavior',
          'Negative symptoms (reduced emotional expression)',
          'Social withdrawal',
          'Cognitive impairment',
          'Lack of insight'
        ],
        diagnosis: {
          criteria: 'Presence of two or more core symptoms for at least one month, with continuous signs for six months',
          methods: ['Psychiatric evaluation', 'Physical exams', 'Brain imaging', 'Psychological testing']
        },
        treatment: [
          { Medication: 'Antipsychotics (typical and atypical)' },
          { Psychosocial: 'Psychotherapy, social skills training, vocational rehabilitation' },
          { Support: 'Family education and support' },
          { Integrated: 'Coordinated specialty care' }
        ],
        prevalence: {
          global: 'Approximately 24 million people affected worldwide',
          by_region: {
            Africa: '3.6 million people',
            Asia: '12.0 million people',
            Europe: '2.6 million people',
            NorthAmerica: '3.1 million people',
            SouthAmerica: '2.2 million people',
            Oceania: '0.5 million people'
          }
        },
        last_updated: new Date()
      },
      {
        name: 'Obsessive-Compulsive Disorder (OCD)',
        overview: {
          description: 'OCD is characterized by unreasonable thoughts and fears (obsessions) that lead to repetitive behaviors (compulsions).',
          causes: ['Genetic factors', 'Brain structure and functioning', 'Environmental factors', 'Serotonin imbalance'],
          risk_factors: ['Family history', 'Stressful life events', 'Other mental health disorders', 'Childhood trauma']
        },
        symptoms: [
          'Unwanted intrusive thoughts',
          'Fear of contamination',
          'Need for symmetry or exactness',
          'Aggressive or taboo thoughts',
          'Excessive checking behaviors',
          'Ordering and arranging',
          'Counting rituals',
          'Excessive cleaning or handwashing'
        ],
        diagnosis: {
          criteria: 'Presence of obsessions, compulsions, or both that are time-consuming and cause significant distress',
          methods: ['Clinical interview', 'Y-BOCS (Yale-Brown Obsessive Compulsive Scale)', 'Medical evaluation']
        },
        treatment: [
          { Psychotherapy: 'Exposure and Response Prevention (ERP), Cognitive Behavioral Therapy (CBT)' },
          { Medication: 'SSRIs, clomipramine' },
          { Alternative: 'Deep brain stimulation (for treatment-resistant cases)' },
          { Support: 'Support groups, family therapy' }
        ],
        prevalence: {
          global: 'Approximately 70 million people affected worldwide',
          by_region: {
            Africa: '9.8 million people',
            Asia: '33.6 million people',
            Europe: '8.4 million people',
            NorthAmerica: '9.1 million people',
            SouthAmerica: '7.7 million people',
            Oceania: '1.4 million people'
          }
        },
        last_updated: new Date()
      },
      {
        name: 'Attention-Deficit/Hyperactivity Disorder (ADHD)',
        overview: {
          description: 'ADHD is a neurodevelopmental disorder characterized by persistent patterns of inattention and/or hyperactivity-impulsivity.',
          causes: ['Genetic factors', 'Brain structure differences', 'Neurotransmitter imbalances', 'Environmental factors'],
          risk_factors: ['Family history', 'Prenatal exposure to alcohol or tobacco', 'Premature birth', 'Lead exposure']
        },
        symptoms: [
          'Difficulty sustaining attention',
          'Easily distracted',
          'Forgetfulness',
          'Frequent fidgeting',
          'Excessive talking',
          'Difficulty waiting turn',
          'Interrupting others',
          'Difficulty with organization'
        ],
        diagnosis: {
          criteria: 'Several symptoms present before age 12, occurring in multiple settings, and interfering with functioning',
          methods: ['Clinical interviews', 'Rating scales', 'Neuropsychological testing', 'Medical examination']
        },
        treatment: [
          { Medication: 'Stimulants (methylphenidate, amphetamines), non-stimulants (atomoxetine, guanfacine)' },
          { Behavioral: 'Behavior therapy, parent training' },
          { Educational: 'Academic interventions, classroom accommodations' },
          { Support: 'Social skills training, cognitive behavioral therapy' }
        ],
        prevalence: {
          global: 'Approximately 366 million people affected worldwide',
          by_region: {
            Africa: '51.2 million people',
            Asia: '164.7 million people',
            Europe: '43.9 million people',
            NorthAmerica: '69.5 million people',
            SouthAmerica: '31.1 million people',
            Oceania: '5.6 million people'
          }
        },
        last_updated: new Date()
      },
      {
        name: 'Eating Disorders',
        overview: {
          description: 'Eating disorders are characterized by severe disturbances in eating behaviors and related thoughts and emotions.',
          causes: ['Biological factors', 'Psychological factors', 'Social and cultural influences'],
          risk_factors: ['Genetic predisposition', 'Body image concerns', 'History of dieting', 'Perfectionism', 'Trauma']
        },
        symptoms: [
          'Restrictive eating',
          'Binge eating',
          'Purging behaviors',
          'Distorted body image',
          'Preoccupation with food and weight',
          'Excessive exercise',
          'Medical complications',
          'Social withdrawal'
        ],
        diagnosis: {
          criteria: 'Specific criteria for each disorder (anorexia nervosa, bulimia nervosa, binge eating disorder)',
          methods: ['Clinical assessment', 'Psychological questionnaires', 'Medical evaluations', 'Laboratory tests']
        },
        treatment: [
          { Psychological: 'Cognitive Behavioral Therapy (CBT), Family-Based Treatment (FBT)' },
          { Medical: 'Nutritional rehabilitation, medication for comorbid conditions' },
          { Support: 'Support groups, multidisciplinary team approach' },
          { Residential: 'Inpatient/residential treatment for severe cases' }
        ],
        prevalence: {
          global: 'Approximately 70 million people affected worldwide',
          by_region: {
            Africa: '7.0 million people',
            Asia: '26.6 million people',
            Europe: '12.6 million people',
            NorthAmerica: '16.1 million people',
            SouthAmerica: '6.3 million people',
            Oceania: '1.4 million people'
          }
        },
        last_updated: new Date()
      },
      {
        name: 'Substance Use Disorders',
        overview: {
          description: 'Substance use disorders involve the continued use of substances despite significant substance-related problems.',
          causes: ['Genetic vulnerability', 'Environmental factors', 'Brain chemistry changes', 'Mental health issues'],
          risk_factors: ['Family history', 'Peer pressure', 'Early use', 'Trauma', 'Mental health disorders']
        },
        symptoms: [
          'Compulsive substance seeking',
          'Inability to cut down or stop use',
          'Tolerance',
          'Withdrawal symptoms',
          'Substance use despite negative consequences',
          'Neglect of responsibilities',
          'Social or interpersonal problems',
          'Physical health complications'
        ],
        diagnosis: {
          criteria: 'Pattern of substance use leading to clinically significant impairment or distress',
          methods: ['Clinical interview', 'Screening tools', 'Physical examination', 'Laboratory tests']
        },
        treatment: [
          { Detoxification: 'Medically supervised withdrawal management' },
          { Medication: 'Maintenance medications, medications for cravings or withdrawal' },
          { Behavioral: 'Cognitive Behavioral Therapy, Motivational Enhancement Therapy' },
          { Support: '12-step programs, group therapy, family therapy' }
        ],
        prevalence: {
          global: 'Approximately 275 million people affected worldwide',
          by_region: {
            Africa: '41.3 million people',
            Asia: '123.8 million people',
            Europe: '33.0 million people',
            NorthAmerica: '49.5 million people',
            SouthAmerica: '22.0 million people',
            Oceania: '5.5 million people'
          }
        },
        last_updated: new Date()
      },
      {
        name: 'Autism Spectrum Disorder (ASD)',
        overview: {
          description: 'Autism spectrum disorder is a neurodevelopmental condition characterized by challenges in social interaction, communication, and restricted or repetitive behaviors.',
          causes: ['Genetic factors', 'Environmental influences', 'Neurological differences', 'Prenatal factors'],
          risk_factors: ['Family history', 'Certain genetic conditions', 'Advanced parental age', 'Complications during pregnancy']
        },
        symptoms: [
          'Social communication difficulties',
          'Restricted or repetitive behaviors',
          'Difficulty with transitions or changes',
          'Sensory sensitivities',
          'Specific routines or rituals',
          'Special interests',
          'Delayed language development',
          'Difficulty understanding nonverbal cues'
        ],
        diagnosis: {
          criteria: 'Persistent deficits in social communication and interaction, along with restricted, repetitive patterns of behavior',
          methods: ['Developmental screening', 'Comprehensive diagnostic evaluation', 'Observation', 'Parent interviews']
        },
        treatment: [
          { Behavioral: 'Applied Behavior Analysis (ABA), Early Start Denver Model (ESDM)' },
          { Educational: 'Special education services, speech therapy, occupational therapy' },
          { Support: 'Social skills training, family education and training' },
          { Medical: 'Medication for co-occurring conditions' }
        ],
        prevalence: {
          global: 'Approximately 78 million people affected worldwide',
          by_region: {
            Africa: '10.9 million people',
            Asia: '38.2 million people',
            Europe: '8.6 million people',
            NorthAmerica: '14.0 million people',
            SouthAmerica: '5.5 million people',
            Oceania: '0.8 million people'
          }
        },
        last_updated: new Date()
      },
      {
        name: 'Insomnia Disorder',
        overview: {
          description: 'Insomnia disorder is characterized by persistent difficulty falling or staying asleep despite adequate opportunity, causing distress or impairment.',
          causes: ['Stress', 'Medical conditions', 'Medications', 'Psychiatric disorders', 'Poor sleep habits'],
          risk_factors: ['Age (more common in older adults)', 'Female gender', 'Shift work', 'Travel across time zones', 'Mental health disorders']
        },
        symptoms: [
          'Difficulty falling asleep',
          'Difficulty staying asleep',
          'Waking too early',
          'Non-restorative sleep',
          'Daytime fatigue',
          'Impaired concentration',
          'Mood disturbances',
          'Worry about sleep'
        ],
        diagnosis: {
          criteria: 'Sleep difficulty at least 3 nights per week for at least 3 months, causing significant distress or impairment',
          methods: ['Sleep history', 'Sleep diaries', 'Physical examination', 'Polysomnography (in some cases)']
        },
        treatment: [
          { Behavioral: 'Cognitive Behavioral Therapy for Insomnia (CBT-I), sleep restriction, stimulus control' },
          { Medication: 'Sleep medications (short-term), melatonin' },
          { Lifestyle: 'Sleep hygiene practices, relaxation techniques' },
          { Alternative: 'Mindfulness meditation, light therapy' }
        ],
        prevalence: {
          global: 'Approximately 760 million people affected worldwide',
          by_region: {
            Africa: '106.4 million people',
            Asia: '364.8 million people',
            Europe: '91.2 million people',
            NorthAmerica: '106.4 million people',
            SouthAmerica: '76.0 million people',
            Oceania: '15.2 million people'
          }
        },
        last_updated: new Date()
      },
      {
        name: 'Borderline Personality Disorder (BPD)',
        overview: {
          description: 'BPD is characterized by a pervasive pattern of instability in interpersonal relationships, self-image, and emotions, with marked impulsivity.',
          causes: ['Genetic factors', 'Brain abnormalities', 'Environmental factors', 'Childhood trauma'],
          risk_factors: ['Family history', 'Childhood abuse or neglect', 'Unstable family relationships', 'Other mental health disorders']
        },
        symptoms: [
          'Fear of abandonment',
          'Unstable relationships',
          'Unclear or shifting self-image',
          'Impulsive behaviors',
          'Suicidal behavior or self-harm',
          'Intense mood swings',
          'Chronic feelings of emptiness',
          'Inappropriate anger'
        ],
        diagnosis: {
          criteria: 'Five or more symptoms from the diagnostic criteria, causing significant distress or impairment',
          methods: ['Clinical interview', 'Psychological evaluation', 'Medical history', 'Standardized assessments']
        },
        treatment: [
          { Psychotherapy: 'Dialectical Behavior Therapy (DBT), Mentalization-Based Treatment (MBT)' },
          { Medication: 'Mood stabilizers, antidepressants, antipsychotics for specific symptoms' },
          { Support: 'Group therapy, family therapy' },
          { Skills: 'Emotion regulation, distress tolerance, interpersonal effectiveness' }
        ],
        prevalence: {
          global: 'Approximately 145 million people affected worldwide',
          by_region: {
            Africa: '17.4 million people',
            Asia: '65.3 million people',
            Europe: '20.3 million people',
            NorthAmerica: '26.1 million people',
            SouthAmerica: '13.1 million people',
            Oceania: '2.9 million people'
          }
        },
        last_updated: new Date()
      },
      {
        name: 'Panic Disorder',
        overview: {
          description: 'Panic disorder is characterized by recurrent unexpected panic attacks and persistent concern about future attacks or their consequences.',
          causes: ['Genetic factors', 'Neurobiological factors', 'Stress', 'Psychological factors'],
          risk_factors: ['Family history', 'Major life stressors', 'History of childhood abuse', 'Other mental health conditions']
        },
        symptoms: [
          'Sudden episodes of intense fear',
          'Heart palpitations',
          'Sweating',
          'Trembling',
          'Shortness of breath',
          'Feeling of choking',
          'Fear of losing control',
          'Fear of dying'
        ],
        diagnosis: {
          criteria: 'Recurrent unexpected panic attacks followed by at least one month of concern about additional attacks',
          methods: ['Clinical interview', 'Physical examination', 'Psychological assessment', 'Ruling out medical conditions']
        },
        treatment: [
          { Psychotherapy: 'Cognitive Behavioral Therapy (CBT), Panic-Focused Psychodynamic Psychotherapy' },
          { Medication: 'SSRIs, SNRIs, benzodiazepines (short-term)' },
          { Alternative: 'Relaxation techniques, mindfulness practices' },
          { Lifestyle: 'Regular exercise, adequate sleep, avoiding caffeine and alcohol' }
        ],
        prevalence: {
          global: 'Approximately 40 million people affected worldwide',
          by_region: {
            Africa: '5.2 million people',
            Asia: '18.4 million people',
            Europe: '5.2 million people',
            NorthAmerica: '6.8 million people',
            SouthAmerica: '3.6 million people',
            Oceania: '0.8 million people'
          }
        },
        last_updated: new Date()
      }
    ];



    await Disease.insertMany(diseases);
    console.log('Database seeded with disease data');
  } catch (error) {
    console.error('Error seeding diseases:', error);
  }
};

export const seedPosts = async () => {
  try {
    //Dont Seed Posts
    return;
    const count = await Post.countDocuments();
    if (count > 0) {
      console.log('Database already seeded with posts');
      return;
    }

    const posts = [];

    // Depression posts (2 posts)
    for (let i = 1; i <= 2; i++) {
      const postId = uuidv4();
      const commentId = uuidv4();
      const replyIds = [uuidv4(), uuidv4()];

      posts.push(new Post({
        PostID: postId,
        PostType: 'Post',
        PostTitle: `Depression Post ${i}`,
        PostBody: `This is a detailed post about dealing with Depression number ${i}.`,
        PostTopic: 'Depression',
        PostChildrenIds: [commentId],
        Likes: 0,
        Dislikes: 0
      }));

      posts.push(new Post({
        PostID: commentId,
        PostType: 'Comment',
        PostBody: `Thanks for sharing your Depression story ${i}!`,
        ParentID: postId,
        PostChildrenIds: replyIds,
        Likes: 0,
        Dislikes: 0
      }));

      replyIds.forEach((replyId, idx) => {
        posts.push(new Post({
          PostID: replyId,
          PostType: 'Reply',
          PostBody: `Reply ${idx + 1} to the Depression comment ${i}.`,
          ParentID: commentId,
          PostChildrenIds: [],
          Likes: 0,
          Dislikes: 0
        }));
      });
    }

    // Anxiety post with 3 comments, one with 3 replies
    const anxietyPostId = uuidv4();
    const anxietyCommentIds = [uuidv4(), uuidv4(), uuidv4()];
    const anxietyReplyIds = [uuidv4(), uuidv4(), uuidv4()];

    posts.push(new Post({
      PostID: anxietyPostId,
      PostType: 'Post',
      PostTitle: 'Anxiety Insights',
      PostBody: 'Sharing my thoughts and journey through anxiety.',
      PostTopic: 'Anxiety',
      PostChildrenIds: anxietyCommentIds,
      Likes: 0,
      Dislikes: 0
    }));

    anxietyCommentIds.forEach((cid, index) => {
      posts.push(new Post({
        PostID: cid,
        PostType: 'Comment',
        PostBody: `Comment ${index + 1} on anxiety post`,
        ParentID: anxietyPostId,
        PostChildrenIds: index === 1 ? anxietyReplyIds : [],
        Likes: 0,
        Dislikes: 0
      }));

      if (index === 1) {
        anxietyReplyIds.forEach((rid, ridx) => {
          posts.push(new Post({
            PostID: rid,
            PostType: 'Reply',
            PostBody: `Reply ${ridx + 1} to anxiety comment 2`,
            ParentID: cid,
            PostChildrenIds: [],
            Likes: 0,
            Dislikes: 0
          }));
        });
      }
    });

    // ADHD post with 3 comments, 1 reply on last comment
    const adhdPostId = uuidv4();
    const adhdCommentIds = [uuidv4(), uuidv4(), uuidv4()];
    const adhdReplyId = uuidv4();

    posts.push(new Post({
      PostID: adhdPostId,
      PostType: 'Post',
      PostTitle: 'ADHD Strategies',
      PostBody: 'How I manage my day with ADHD.',
      PostTopic: 'ADHD',
      PostChildrenIds: adhdCommentIds,
      Likes: 0,
      Dislikes: 0
    }));

    adhdCommentIds.forEach((cid, index) => {
      posts.push(new Post({
        PostID: cid,
        PostType: 'Comment',
        PostBody: `ADHD comment ${index + 1}`,
        ParentID: adhdPostId,
        PostChildrenIds: index === 2 ? [adhdReplyId] : [],
        Likes: 0,
        Dislikes: 0
      }));
    });

    posts.push(new Post({
      PostID: adhdReplyId,
      PostType: 'Reply',
      PostBody: 'This reply helped me a lot, thanks!',
      ParentID: adhdCommentIds[2],
      PostChildrenIds: [],
      Likes: 0,
      Dislikes: 0
    }));

    await Post.insertMany(posts);
    console.log('Database seeded with expanded post data');
  } catch (error) {
    console.error('Error seeding posts:', error);
  }
};

export const seedInitialData = async () => {
  await seedDiseases();
  await seedPosts();
};
