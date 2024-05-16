define({ entries : {
    "ArunnehruGeetha2013": {
        "abstract": "Activity recognition is having a wide range of applications in automated surveillance and is an active research topic among the computer vision community. In this paper, an activity recognition approach is proposed. Motion information is extracted from the difference image based on Region of Interest (ROI) using 18-Dimensional features called Block Intensity Vector (BIV). The experiments are carried out on the KTH dataset considering four activities viz., walking, running, waving, and boxing with SVM. The approach shows an overall performance of 94.58% in recognizing the actions performed. Experimental results show that the proposed approach is comparable with the existing methods.",
        "author": "J. Arunnehru and M. Kalaiselvi Geetha",
        "journal": "International Journal of Computer Applications",
        "keywords": "video surveillance, activity recognition, gesture recognition, support vector machines, difference image",
        "number": "9",
        "pages": "1-6",
        "title": "Automatic Activity Recognition for Video Surveillance",
        "type": "article",
        "volume": "75",
        "year": "2013"
    },
    "BenArieWangPanditRajaram2002": {
        "abstract": "In this paper, we develop a novel method for view-based recognition of human action/activity from videos. By observing just a few frames, we can identify the activity that takes place in a video sequence. The basic idea of our method is that activities can be positively identified from a sparsely sampled sequence of a few body poses acquired from videos. In our approach, an activity is represented by a set of pose and velocity vectors for the major body parts (hands, legs, and torso) and stored in a set of multidimensional hash tables. We develop a theoretical foundation that shows that robust recognition of a sequence of body pose vectors can be achieved by a method of indexing and sequencing and it requires only a few pose vectors (i.e., sampled body poses in video frames). We find that the probability of false alarm drops exponentially with the increased number of sampled body poses. So, matching only a few body poses guarantees high probability for correct recognition. Our approach is parallel, i.e., all possible model activities are examined at one indexing operation since all of the model activities are stored in the same set of hash tables. In addition, our method is robust to partial occlusion since each body part is indexed separately. We use a sequence-based voting approach to recognize the activity invariant to the activity speed. Experiments performed with videos having eight different activities show robust recognition with our method. The method is also robust in conditions of varying view angle in the range of \u00b130 degrees.",
        "author": "Jezekiel Ben-Arie and Zhiqian Wang and Purvin Pandit and Shyamsundar Rajaram",
        "journal": "IEEE Transactions on Pattern Analysis and Machine Intelligence",
        "keywords": "human activity recognition, multidimensional indexing, sequence recognition, human body part tracking, EXpansion Matching (EXM)",
        "number": "8",
        "pages": "1091-1104",
        "title": "Human Activity Recognition Using Multidimensional Indexing",
        "type": "article",
        "volume": "24",
        "year": "2002"
    },
    "HoogsPerera2008": {
        "abstract": "With recent advances in motion detection and tracking in video, more efforts are being directed at higher-level video analysis such as recognizing actions, events, and activities. One of the more challenging problems is recognizing activities that involve multiple people and/or vehicles, whose relationships change over time, when motion detection and tracking are unreliable, as commonly occurs in busy scenes. We describe an approach to this problem based on Dynamic Bayesian Networks, and show how DBNs can be extended to compensate for track failures. We also show that defining DBNs with semantic concepts improves robustness versus direct observables, and discuss implications and ideas for incorporating semantic, symbolic knowledge into the perceptual domain of activity recognition.",
        "address": "Clifton Park, NY, USA",
        "author": "Anthony Hoogs and A. G. Amitha Perera",
        "booktitle": "Proceedings of the Twenty-Third AAAI Conference on Artificial Intelligence",
        "keywords": "video activity recognition, motion detection, tracking, Dynamic Bayesian Networks, semantic concepts",
        "organization": "Association for the Advancement of Artificial Intelligence",
        "title": "Video Activity Recognition in the Real World",
        "type": "inproceedings",
        "year": "2008"
    },
    "JalalKimKamalKim2017": {
        "abstract": "The recently developed depth imaging technologies have provided new directions for human activity recognition (HAR) without attaching optical markers or any other motion sensors to human body parts. In this paper, we propose novel multi-fused features for an online human activity recognition (HAR) system that recognizes human activities from continuous sequences of depth maps. The proposed online HAR system segments human depth silhouettes using temporal human motion information as well as obtains human skeleton joints using spatiotemporal human body information. Then, it extracts the spatiotemporal multi-fused features that concatenate four skeleton joint features and one body shape feature. Skeleton joint features include the torso-based distance feature (DT), the key joint-based distance feature (DK), the spatiotemporal magnitude feature (M), and the spatiotemporal directional angle feature (\u03b8). The body shape feature called HOG-DDS represents the projections of the depth differential silhouettes (DDS) between two consecutive frames onto three orthogonal planes by the histogram of oriented gradients (HOG) format. The size of the proposed spatiotemporal multi-fused feature is reduced by a code vector in the codebook which is generated by the vector quantization method. Then, it trains the hidden Markov model (HMM) with the code vectors of the multi-fused features and recognizes the segmented human activity by the forward spotting scheme using the trained HMM-based human activity classifiers. The experimental results on three challenging depth video datasets such as IM-Daily-DepthActivity, MSRAction3D, and MSRDailyActivity3D demonstrate that the proposed online HAR method using the proposed multi-fused features outperforms the state-of-the-art HAR methods in terms of recognition accuracy.",
        "author": "Ahmad Jalal and Yeon-Ho Kim and Yong-Joong Kim and Shaharyar Kamal and Daijin Kim",
        "journal": "Pattern Recognition",
        "keywords": "human activity recognition, depth video, spatiotemporal features, skeleton joint extraction, hidden Markov model, forward spotting scheme",
        "pages": "295-308",
        "title": "Robust Human Activity Recognition from Depth Video Using Spatiotemporal Multi-Fused Features",
        "type": "article",
        "volume": "61",
        "year": "2017"
    },
    "LinSunPoovandranZhang2008": {
        "abstract": "This paper presents a novel approach for automatic recognition of human activities from video sequences. We first group features with high correlations into Category Feature Vectors (CFVs). Each activity is then described by a combination of Gaussian Mixture Models (GMMs) with each GMM representing the distribution of a CFV. We show that this approach offers flexibility to add new events and to deal with the problem of lacking training data for building models for unusual events. For improving the recognition accuracy, a Confident-Frame-based Recognizing algorithm (CFR) is proposed to recognize the human activity, where the video frames which have high confidence for recognizing an activity (Confident-Frames) are used as a specialized model for classifying the rest of the video frames. Experimental results show the effectiveness of the proposed approach.",
        "author": "Weiyao Lin and Ming-Ting Sun and Radha Poovandran and Zhengyou Zhang",
        "journal": "IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
        "keywords": "human activity recognition, video surveillance, Gaussian Mixture Models, Confident-Frame-based Recognizing algorithm, Category Feature Vectors",
        "title": "Human Activity Recognition for Video Surveillance",
        "type": "article",
        "year": "2008"
    },
    "MotwaniMooney2012": {
        "abstract": "Recognizing activities in real-world videos is a challenging AI problem. We present a novel combination of standard activity classification, object recognition, and text mining to learn effective activity recognizers without ever explicitly labeling training videos. We cluster verbs used to describe videos to automatically discover classes of activities and produce a labeled training set. This labeled data is then used to train an activity classifier based on spatio-temporal features. Next, text mining is employed to learn the correlations between these verbs and related objects. This knowledge is then used together with the outputs of an off-the-shelf object recognizer and the trained activity classifier to produce an improved activity recognizer. Experiments on a corpus of YouTube videos demonstrate the effectiveness of the overall approach.",
        "author": "Tanvi S. Motwani and Raymond J. Mooney",
        "conference": "ECAI 2012 - 20th European Conference on Artificial Intelligence",
        "keywords": "video activity recognition, object recognition, text mining, natural language processing, AI, machine learning",
        "title": "Improving Video Activity Recognition Using Object Recognition and Text Mining",
        "type": "article",
        "year": "2012"
    },
    "RibeiroSantosVictor2005": {
        "abstract": "In this paper, we address the problem of recognizing human activities, such as Active, Inactive, Walking, Running, Fighting from video sequences, with a particular emphasis on the problems of feature selection, data modeling, and classifier structure. We propose the use of a Bayesian classifier, and model the likelihood functions as Gaussian mixtures, adequate to cope with complex data distributions, that are learned automatically. Our results were based on nearly 16,000 images of five activities and we achieved an error rate as low as 1.5%.",
        "author": "Pedro Canotilho Ribeiro and Jos\u00e9 Santos-Victor",
        "conference": "HAREM 2005 - International Workshop on Human Activity Recognition and Modelling",
        "keywords": "human activity recognition, video sequences, feature selection, data modeling, classifier structure, Bayesian classifier, Gaussian mixtures",
        "location": "Oxford, UK",
        "title": "Human Activity Recognition from Video: Modeling, Feature Selection, and Classification Architecture",
        "type": "article",
        "year": "2005"
    },
    "RodriguezMoreno2019": {
        "abstract": "Video activity recognition, although being an emerging task, has been the subject of important research efforts due to the importance of its everyday applications. Surveillance by video cameras could benefit greatly by advances in this field. In the area of robotics, the tasks of autonomous navigation or social interaction could also take advantage of the knowledge extracted from live video recording. The aim of this paper is to survey the state-of-the-art techniques for video activity recognition while at the same time mentioning other techniques used for the same task that the research community has known for several years. For each of the analyzed methods, its contribution over previous works and the proposed approach performance are discussed.",
        "author": "Itsaso Rodr\u00edguez-Moreno and Jos\u00e9 Mar\u00eda Mart\u00ednez-Otzeta and Basilio Sierra and Igor Rodriguez and Ekaitz Jauregi",
        "journal": "Sensors",
        "keywords": "activity recognition, computer vision, optical flow, deep learning",
        "number": "14",
        "pages": "3160",
        "title": "Video Activity Recognition: State-of-the-Art",
        "type": "article",
        "volume": "19",
        "year": "2019"
    },
    "RoshtkhariLevine2013": {
        "abstract": "This paper presents a novel approach for action recognition, localization, and video matching based on a hierarchical codebook model of local spatio-temporal video volumes. Given a single example of an activity as a query video, the proposed method finds similar videos to the query in a target video dataset. The method is based on the bag of video words (BOV) representation and does not require prior knowledge about actions, background subtraction, motion estimation, or tracking. It is also robust to spatial and temporal scale changes, as well as some deformations. The algorithm was applied to three available video datasets for action recognition with different complexities (KTH, Weizmann, and MSR II) and the results were superior to other approaches, especially in the case of a single training example and cross-dataset action recognition.",
        "author": "Mehrsan Javan Roshtkhari and Martin D. Levine",
        "journal": "Image and Vision Computing",
        "keywords": "action recognition, bag of video words, hierarchical codebook, spatio-temporal contextual information, probabilistic modeling, context, ensemble of volumes",
        "number": "10",
        "pages": "864-876",
        "title": "Human Activity Recognition in Videos Using a Single Example",
        "type": "article",
        "volume": "31",
        "year": "2013"
    },
    "RotaThonnat2002": {
        "abstract": "We propose a new approach for video sequence interpretation based on declarative models of activities. The aim is to recognize certain situations, like states of the scene, events, and scenarios, in a video stream to understand what happens in the scene. The activity recognition is composed of two subproblems: declaring activities and automatically recognizing them using a CSP algorithm.",
        "author": "Nathana\u00ebl A. Rota and Monique Thonnat",
        "conference": "Proceedings of the International Workshop on Conceptual Modeling Approaches for e-Business: A Web Service Perspective (eCOMO 2002)",
        "keywords": "video sequence interpretation, declarative models, activity recognition, constraint satisfaction problem, visual surveillance",
        "title": "Activity Recognition from Video Sequences using Declarative Models",
        "type": "article",
        "year": "2002"
    }
}});