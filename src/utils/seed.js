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
            Africa: '5.4%',
            Asia: '3.1%',
            Europe: '4.2%',
            NorthAmerica: '4.4%',
            SouthAmerica: '4.0%',
            Oceania: '4.3%'
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
            Africa: '4.0%',
            Asia: '2.9%',
            Europe: '3.9%',
            NorthAmerica: '5.1%',
            SouthAmerica: '3.8%',
            Oceania: '4.3%'
          }
        },
        last_updated: new Date()
      },
      {
        name: 'ADHD',
        overview: {
          description: 'Attention Deficit Hyperactivity Disorder (ADHD) is a neurodevelopmental disorder marked by inattention, hyperactivity, and impulsivity.',
          causes: ['Genetics', 'Brain structure differences', 'Prenatal exposures', 'Environmental toxins', 'Low birth weight'],
          risk_factors: ['Family history of ADHD', 'Exposure to tobacco or alcohol in utero', 'Premature birth', 'Brain injuries']
        },
        symptoms: [
          'Difficulty sustaining attention',
          'Frequent daydreaming',
          'Forgetfulness',
          'Impulsivity',
          'Fidgeting or squirming',
          'Excessive talking',
          'Interrupting others',
          'Difficulty organizing tasks'
        ],
        diagnosis: {
          criteria: 'Symptoms must be present before age 12, occur in two or more settings, and interfere with functioning',
          methods: ['Behavioral assessments', 'Parent/teacher reports', 'Clinical interviews', 'ADHD-specific rating scales']
        },
        treatment: [
          { BehavioralTherapy: 'Parent training, classroom behavior management, social skills training' },
          { Medication: 'Stimulants (e.g., methylphenidate, amphetamines), non-stimulants (atomoxetine)' },
          { Education: 'Individualized Education Program (IEP) or 504 plans in school settings' },
          { Support: 'Routine, structure, and consistent feedback' }
        ],
        prevalence: {
          global: 'Estimated to affect around 5% of children globally, with many continuing into adulthood',
          by_region: {
            Africa: '3.5%',
            Asia: '2.6%',
            Europe: '4.5%',
            NorthAmerica: '5.9%',
            SouthAmerica: '4.1%',
            Oceania: '4.8%'
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
