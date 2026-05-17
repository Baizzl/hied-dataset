const datasetConfig = {
  datasetName: "HIED",
  contactEmail: "jasonsongrain@hotmail.com",
  emailSubjectPrefix: "[HIED Dataset Application]",
};

const movieClips = [
  { no: 1, emotion: "encouragement", en: "Facing the Giants", zh: "面对巨人", start: "0:44:30", length: 373 },
  { no: 2, emotion: "sadness", en: "Tangshan Earthquake", zh: "唐山大地震", start: "0:19:36", length: 205 },
  { no: 3, emotion: "anger", en: "Cry Me A Sad River", zh: "悲伤逆流成河", start: "1:25:00", length: 242 },
  { no: 4, emotion: "anger", en: "Shaolin Soccer", zh: "少林足球", start: "1:29:09", length: 258 },
  { no: 5, emotion: "neutral", en: "World Heritage In China", zh: "世界遗产在中国：黄山", start: "0:00:53", length: 226 },
  { no: 6, emotion: "happiness", en: "Lost In Thailand", zh: "人再囧途之泰囧", start: "0:06:12", length: 238 },
  { no: 7, emotion: "encouragement", en: "Pioneer", zh: "革命者", start: "1:46:30", length: 269 },
  { no: 8, emotion: "encouragement", en: "Rocky", zh: "洛奇", start: "1:01:43", length: 198 },
  { no: 9, emotion: "sadness", en: "Tangshan Earthquake", zh: "唐山大地震", start: "1:48:18", length: 205 },
  { no: 10, emotion: "anger", en: "Shaolin Soccer", zh: "少林足球", start: "1:35:04", length: 210 },
  { no: 11, emotion: "anger", en: "The Matrix", zh: "黑客帝国", start: "1:22:19", length: 284 },
  { no: 12, emotion: "neutral", en: "World Heritage In China", zh: "世界遗产在中国：苏州古典园林", start: "0:03:00", length: 221 },
  { no: 13, emotion: "happiness", en: "Lost In Thailand", zh: "人再囧途之泰囧", start: "1:05:03", length: 204 },
  { no: 14, emotion: "encouragement", en: "Leap", zh: "夺冠", start: "0:45:50", length: 205 },
  { no: 15, emotion: "encouragement", en: "Pioneer", zh: "革命者", start: "1:03:10", length: 254 },
  { no: 16, emotion: "fear", en: "Deathly Stillness", zh: "死寂", start: "1:10:43", length: 182 },
  { no: 17, emotion: "fear", en: "The Conjuring", zh: "招魂", start: "1:14:23", length: 200 },
  { no: 18, emotion: "anger", en: "Better Days", zh: "少年的你", start: "1:08:31", length: 240 },
  { no: 19, emotion: "fear", en: "Coming Soon", zh: "厉鬼将映", start: "0:01:57", length: 192 },
  { no: 20, emotion: "sadness", en: "Back to 1942", zh: "一九四二", start: "0:49:58", length: 242 },
  { no: 21, emotion: "fear", en: "Coming Soon", zh: "厉鬼将映", start: "1:09:13", length: 189 },
  { no: 22, emotion: "happiness", en: "Flirting Scholar", zh: "唐伯虎点秋香", start: "1:18:57", length: 266 },
  { no: 23, emotion: "neutral", en: "World Heritage In China", zh: "世界遗产在中国", start: "0:10:40", length: 184 },
  { no: 24, emotion: "sadness", en: "Back to 1942", zh: "一九四二", start: "2:01:21", length: 240 },
  { no: 25, emotion: "fear", en: "Deathly Stillness", zh: "死寂", start: "0:54:50", length: 211 },
  { no: 26, emotion: "neutral", en: "World Heritage In China", zh: "世界遗产在中国", start: "0:10:41", length: 240 },
  { no: 27, emotion: "happiness", en: "A Chinese Odyssey Part One: Pandora's Box", zh: "大话西游之月光宝盒", start: "0:11:32", length: 241 },
  { no: 28, emotion: "sadness", en: "Back to 1942", zh: "一九四二", start: "2:16:37", length: 240 },
  { no: 29, emotion: "neutral", en: "World Heritage In China", zh: "世界遗产在中国", start: "0:05:36", length: 240 },
  { no: 30, emotion: "happiness", en: "A Chinese Odyssey Part One: Pandora's Box", zh: "大话西游之月光宝盒", start: "0:35:00", length: 242 },
];

const emotionOrder = ["happiness", "encouragement", "neutral", "anger", "fear", "sadness"];

const translations = {
  zh: {
    languageCode: "zh-CN",
    title: "HIED 听障人群脑电情绪识别数据集",
    metaDescription: "HIED 听障人群脑电情绪识别数据集，介绍实验设计、刺激材料、预处理流程和数据申请方式。",
    "brand.aria": "HIED 数据集主页",
    "brand.logoAlt": "HIED 数据集 logo",
    "brand.subtitle": "听障人群脑电情绪识别数据集",
    "nav.aria": "主导航",
    "nav.dataset": "数据集",
    "nav.stimuli": "电影片段",
    "nav.protocol": "实验流程",
    "nav.access": "申请数据",
    "nav.citation": "论文引用",
    "nav.contact": "联系",
    "language.aria": "语言切换",
    "hero.kicker": "HIED · EEG 情绪识别数据集",
    "hero.title": "HIED 听障人群脑电情绪识别数据集",
    "hero.lead": "HIED 是面向听障人群的预处理脑电情绪识别数据集，记录被试在观看情绪电影片段时的 EEG 信号，可用于情感计算、脑机交互与包容性情绪识别研究。",
    "hero.actions": "主要操作",
    "hero.stimuli": "查看电影片段",
    "hero.preprocessing": "查看预处理流程",
    "hero.requestAccess": "申请 EEG 数据",
    "hero.doi": "查看论文 DOI",
    "record.aria": "数据集档案",
    "record.status": "刺激信息 · 数据申请",
    "record.release.label": "开放内容",
    "record.release.value": "预处理 EEG 时序数据",
    "record.files.label": "数据文件",
    "record.files.value": "900 个 MATLAB 文件，约 9.0 GB",
    "record.signal.label": "公开信号",
    "record.signal.value": "62 通道，预处理后 200 Hz",
    "record.stimuli.label": "刺激材料",
    "record.stimuli.value": "30 个中文字幕电影片段，6 类情绪",
    "stats.aria": "数据集摘要",
    "stats.subjects": "名听障被试",
    "stats.files": "个预处理 MAT 文件",
    "stats.channels": "公开 EEG 通道",
    "stats.rate": "公开采样率",
    "stats.volume": "数据集规模",
    "section.visual": "可视化",
    "visual.title": "用图看懂 HIED 数据集。",
    "visual.signal.title": "预处理 EEG 信号",
    "visual.signal.text": "公开试次提供 62 通道、200 Hz 的 EEG 时序数据，便于研究者自行进行特征提取与模型实验。",
    "visual.signal.tag1": "62 通道",
    "visual.signal.tag2": "200 Hz",
    "visual.signal.tag3": "MAT 文件",
    "visual.emotion.title": "六类情绪刺激",
    "visual.emotion.text": "30 个带中文字幕的电影片段均衡覆盖 6 类情绪，每类 5 个片段。",
    "visual.structure.title": "清晰的数据组织",
    "visual.structure.text": "公开数据按被试和试次组织，便于快速编写加载、检查和建模脚本。",
    "visual.structure.subjects": "30 个被试文件夹",
    "visual.structure.trials": "每人 30 个试次",
    "visual.structure.variables": "时序数据变量",
    "emotion.happiness": "快乐",
    "emotion.encouragement": "激励",
    "emotion.neutral": "平静",
    "emotion.anger": "愤怒",
    "emotion.fear": "恐惧",
    "emotion.sadness": "悲伤",
    "section.overview": "概览",
    "overview.title": "面向听障人群情绪分析的脑电数据集。",
    "overview.p1": "HIED 记录听障被试观看情绪电影片段时的 EEG 活动，覆盖快乐、激励、平静、愤怒、恐惧和悲伤六类情绪，用于面向听障人群的情绪识别研究。",
    "overview.p2": "数据包提供预处理后的 EEG 时序信号，不包含已提取特征。使用者提交已签署的 Word 许可协议并经审核后获取数据，可根据研究设计开展特征提取、建模与验证。",
    "overview.participantAlt": "HIED 被试佩戴脑电帽观看电影刺激片段",
    "overview.setupAlt": "HIED 脑电实验采集设备与刺激呈现环境",
    "section.dataset": "数据集",
    "dataset.title": "数据集描述",
    "dataset.card1.title": "被试信息",
    "dataset.card1.text": "数据集包含 30 名听障学生被试，其中女性 12 名、男性 18 名，平均年龄 22 岁。",
    "dataset.card2.title": "刺激材料",
    "dataset.card2.text": "30 个带中文字幕的电影片段覆盖 6 类情绪，每类 5 个。片段时长范围为 182 s 至 373 s，平均时长 231.37 s。",
    "dataset.card3.title": "脑电信号",
    "dataset.card3.text": "EEG 使用 64 通道 Neuroscan SynAmps2 系统采集；公开文件包含预处理后的 62 通道 EEG 信号，采样率为 200 Hz。",
    "dataset.card4.title": "数据组织",
    "dataset.card4.text": "数据按被试文件夹 <code>S01</code> 至 <code>S30</code> 组织。每个被试文件夹包含 30 个试次文件，命名为 <code>s01.mat</code> 至 <code>s30.mat</code>。",
    "technical.aria": "技术规格",
    "technical.cnName.label": "中文名称",
    "technical.cnName.value": "听障人群脑电情绪识别数据集",
    "technical.enName.label": "英文名称",
    "technical.enName.value": "HIED, Hearing-Impaired EEG Dataset",
    "technical.release.label": "开放数据",
    "technical.release.value": "MATLAB <code>.mat</code> 格式的预处理 EEG 时序数据；不包含特征提取结果。",
    "technical.layout.label": "文件结构",
    "technical.layout.value": "<code>HIED/S01-S30</code>，共 30 个被试文件夹、900 个试次文件。",
    "technical.variables.label": "MAT 变量",
    "technical.variables.value": "<code>data</code>、<code>nbchan</code>、<code>srate</code> 和 <code>times</code>；<code>data</code> 以通道 × 时间点形式存储。",
    "technical.emotions.label": "情绪类别",
    "technical.emotions.value": "快乐、激励、平静、愤怒、恐惧、悲伤。",
    "technical.acquisition.label": "采集设备",
    "technical.acquisition.value": "Neuroscan SynAmps2，64 通道 Quik-Cap，AgCl 电极，国际 10-20 系统，电极阻抗控制在 5 kOhm 以下。",
    "technical.preprocessing.label": "预处理流程",
    "technical.preprocessing.value": "降采样至 200 Hz，1-75 Hz 滤波，49-51 Hz 工频抑制，坏道插值，TP9/TP10 重参考，并通过 ICA 去除伪迹。",
    "section.stimuli": "电影片段",
    "stimuli.title": "电影刺激片段",
    "stimuli.intro": "HIED 使用 30 个带中文字幕的电影片段作为情绪刺激源，覆盖 6 类离散情绪，每类 5 个片段。片段编号、情绪标签、片名、开始时间和时长共同构成可复现实验刺激设计的基础信息。",
    "stimuli.summary.clips": "电影片段",
    "stimuli.summary.emotions": "情绪类别",
    "stimuli.summary.perEmotion": "每类片段",
    "stimuli.summary.average": "平均时长",
    "stimuli.groups.aria": "按情绪分组的电影片段",
    "stimuli.table.no": "序号",
    "stimuli.table.emotion": "情绪",
    "stimuli.table.title": "电影片段",
    "stimuli.table.start": "开始时间",
    "stimuli.table.length": "时长",
    "stimuli.clipsSuffix": "个片段",
    "stimuli.seconds": "秒",
    "section.protocol": "流程",
    "protocol.title": "实验与处理流程",
    "preprocess.aria": "HIED 预处理动画演示",
    "preprocess.kicker": "EEG 信号预处理",
    "preprocess.title": "从原始 EEG 到干净的试次级信号。",
    "preprocess.text": "预处理流程在特征提取前完成：EEG 信号降采样至 200 Hz，经 1-75 Hz 带通滤波和 49-51 Hz 工频抑制减少冗余与干扰，随后进行坏导插值、TP9/TP10 重参考和 ICA 伪迹去除，形成稳定的试次级 EEG 信号。",
    "preprocess.raw": "Raw EEG",
    "preprocess.clean": "Clean EEG",
    "preprocess.step1.title": "降采样",
    "preprocess.step1.text": "将原始 EEG 降采样至 200 Hz。",
    "preprocess.step2.title": "滤波",
    "preprocess.step2.text": "使用 1-75 Hz 带通滤波，并进行 49-51 Hz 工频抑制。",
    "preprocess.step3.title": "坏导插值",
    "preprocess.step3.text": "坏导由相邻电极通道均值插值替代。",
    "preprocess.step4.title": "重参考",
    "preprocess.step4.text": "将双侧乳突 TP9、TP10 设置为参考电极。",
    "preprocess.step5.title": "ICA 去伪迹",
    "preprocess.step5.text": "减少眼动、肌电、心电和环境噪声伪迹。",
    "protocol.pipeline.aria": "实验流程可视化",
    "protocol.pipe1": "知情同意",
    "protocol.pipe2": "脑电准备",
    "protocol.pipe3": "电影刺激",
    "protocol.pipe4": "情绪自评",
    "protocol.pipe5": "信号预处理",
    "protocol.pipe6": "审核获取",
    "protocol.step1.title": "招募与知情同意",
    "protocol.step1.text": "实验前通过手语支持向被试说明实验目的、流程与注意事项，被试签署知情同意书后参与 EEG 采集。",
    "protocol.step2.title": "采集准备",
    "protocol.step2.text": "清洁头皮，按标准定位佩戴脑电帽，注入导电膏，并在正式记录前检查电极阻抗。",
    "protocol.step3.title": "情绪诱发",
    "protocol.step3.text": "每个试次开始前呈现情绪提示，被试观看一个带中文字幕的电影片段，同时连续记录 EEG 信号。",
    "protocol.step4.title": "休息与自评",
    "protocol.step4.text": "每个片段结束后至少休息 15 s，随后约 1 min 完成情绪自评与实验记录。",
    "protocol.step5.title": "信号预处理",
    "protocol.step5.text": "原始 EEG 经降采样、滤波、重参考、坏道修复，并使用独立成分分析减少眼动、肌电、心电和环境噪声伪迹。",
    "protocol.step6.title": "数据申请",
    "protocol.step6.text": "审核通过后，申请者可获取试次级预处理 EEG 信号，并根据研究设计进行特征提取、建模与验证。",
    "section.baseline": "基线",
    "baseline.title": "参考方法与论文结果",
    "baseline.aria": "论文报告的基线结果",
    "baseline.header.feature": "特征",
    "baseline.header.experiment": "实验设置",
    "baseline.header.accuracy": "报告准确率",
    "baseline.header.method": "方法",
    "baseline.row1.experiment": "被试依赖，六分类情绪识别",
    "baseline.row2.experiment": "被试依赖，六分类情绪识别",
    "baseline.row3.experiment": "时间窗口对比",
    "baseline.row3.accuracy": "3 s 窗口效果最好",
    "baseline.note": "关联论文报告了 Shifted EEG Channel Transformer 方法。可申请获取的 HIED 数据包本身提供预处理 EEG 信号，不包含 PSD 或 DE 特征文件。",
    "section.access": "申请",
    "access.title": "申请 HIED 脑电数据",
    "access.card.title": "访问说明",
    "access.card.text": "HIED 预处理 EEG 数据需要通过申请审核获取。请按使用语言下载中文或英文 Word 许可协议，填写使用者信息并签署后发送至指定邮箱。",
    "access.req1": "数据仅限学术或非商业研究使用。",
    "access.req2": "使用者需填写个人或负责人信息，并签署许可协议。",
    "access.req3": "数据不得用于识别被试身份，不得未经许可转让、共享或公开发布。",
    "access.req4": "论文或成果中使用 HIED 时，请引用关联论文。",
    "access.downloadFormEn": "下载英文许可协议",
    "access.downloadFormCn": "下载中文许可协议",
    "form.title": "生成申请邮件",
    "form.name": "姓名",
    "form.namePlaceholder": "请输入申请人姓名",
    "form.affiliation": "单位",
    "form.affiliationPlaceholder": "请输入所在单位",
    "form.submit": "打开邮件客户端",
    "form.status": "邮件窗口已打开，请附上已填写并签署的 Word 许可协议后发送。",
    "section.citation": "引用",
    "citation.title": "关联论文",
    "citation.paper": "Zhongli Bai, Fazheng Hou, Kaixuan Sun, Qingzhou Wu, Mu Zhu, Zemin Mao, Yu Song, and Qiang Gao. <em>IEEE Journal of Biomedical and Health Informatics</em>, vol. 27, no. 10, pp. 4758-4767, 2023. DOI: <a href=\"https://doi.org/10.1109/JBHI.2023.3301993\">10.1109/JBHI.2023.3301993</a>.",
    "citation.openDoi": "查看 DOI",
    "citation.copyBibtex": "复制 BibTeX",
    "citation.copied": "已复制",
    "citation.selectBibtex": "请选择 BibTeX",
    "section.contact": "联系",
    "contact.title": "数据集团队",
    "contact.email.title": "联系邮箱",
    "footer.copyright": "© <span data-current-year>2026</span> HIED Dataset",
    "footer.access": "HIED 预处理 EEG 数据需提交许可协议审核。",
  },
  en: {
    languageCode: "en",
    title: "HIED Hearing-Impaired EEG Dataset",
    metaDescription: "HIED is a hearing-impaired EEG emotion recognition dataset presenting the experimental design, stimuli, preprocessing workflow, and dataset access procedure.",
    "brand.aria": "HIED Dataset home",
    "brand.logoAlt": "HIED Dataset logo",
    "brand.subtitle": "Hearing-Impaired EEG Dataset",
    "nav.aria": "Primary navigation",
    "nav.dataset": "Dataset",
    "nav.stimuli": "Movie Clips",
    "nav.protocol": "Protocol",
    "nav.access": "Access",
    "nav.citation": "Citation",
    "nav.contact": "Contact",
    "language.aria": "Language switch",
    "hero.kicker": "HIED · EEG Emotion Recognition Dataset",
    "hero.title": "HIED Hearing-Impaired EEG Dataset",
    "hero.lead": "HIED is a preprocessed EEG emotion recognition dataset collected from hearing-impaired participants while they watched affective movie clips. It supports research in affective computing, brain-computer interaction, and inclusive emotion recognition.",
    "hero.actions": "Main actions",
    "hero.stimuli": "View Movie Clips",
    "hero.preprocessing": "View Preprocessing",
    "hero.requestAccess": "Request EEG Data",
    "hero.doi": "Open Paper DOI",
    "record.aria": "Dataset record",
    "record.status": "Stimuli listed · EEG by request",
    "record.release.label": "Release",
    "record.release.value": "Preprocessed EEG time-series",
    "record.files.label": "Files",
    "record.files.value": "900 MATLAB files, about 9.0 GB",
    "record.signal.label": "Signal",
    "record.signal.value": "62 channels, 200 Hz after preprocessing",
    "record.stimuli.label": "Stimuli",
    "record.stimuli.value": "30 Chinese-subtitled movie clips, six emotions",
    "stats.aria": "Dataset summary",
    "stats.subjects": "hearing-impaired participants",
    "stats.files": "preprocessed MAT files",
    "stats.channels": "released EEG channels",
    "stats.rate": "released sampling rate",
    "stats.volume": "dataset volume",
    "section.visual": "Visuals",
    "visual.title": "A visual map of the HIED release.",
    "visual.signal.title": "Preprocessed EEG Signals",
    "visual.signal.text": "Released trials provide 62-channel EEG time-series at 200 Hz, ready for custom feature extraction and modeling.",
    "visual.signal.tag1": "62 channels",
    "visual.signal.tag2": "200 Hz",
    "visual.signal.tag3": "MAT files",
    "visual.emotion.title": "Six Emotion Categories",
    "visual.emotion.text": "Thirty Chinese-subtitled movie clips are balanced across six emotion categories, with five clips per class.",
    "visual.structure.title": "Clear File Organization",
    "visual.structure.text": "The release is organized by subject and trial so researchers can quickly script loading, preprocessing checks, and model experiments.",
    "visual.structure.subjects": "30 subject folders",
    "visual.structure.trials": "30 trials each",
    "visual.structure.variables": "time-series variables",
    "emotion.happiness": "Happiness",
    "emotion.encouragement": "Encouragement",
    "emotion.neutral": "Neutral",
    "emotion.anger": "Anger",
    "emotion.fear": "Fear",
    "emotion.sadness": "Sadness",
    "section.overview": "Overview",
    "overview.title": "A curated EEG emotion dataset for hearing-impaired participants.",
    "overview.p1": "HIED records EEG activity from hearing-impaired participants while they watched affective movie clips. The dataset covers happiness, encouragement, neutral state, anger, fear, and sadness for emotion-recognition research.",
    "overview.p2": "The data package provides preprocessed EEG time-series signals and does not include extracted features. Users submit the signed Word license agreement for review and can perform feature extraction, modeling, and validation according to their research design after approval.",
    "overview.participantAlt": "HIED participant wearing an EEG cap during movie stimulation",
    "overview.setupAlt": "HIED EEG experiment setup with acquisition equipment and stimulus display",
    "section.dataset": "Dataset",
    "dataset.title": "Dataset Description",
    "dataset.card1.title": "Participants",
    "dataset.card1.text": "The dataset includes 30 hearing-impaired student participants: 12 female and 18 male participants, with a mean age of 22 years.",
    "dataset.card2.title": "Stimuli",
    "dataset.card2.text": "Thirty Chinese-subtitled movie clips cover six emotion categories, with five clips per category. Clip durations range from 182 s to 373 s, with an average duration of 231.37 s.",
    "dataset.card3.title": "Signals",
    "dataset.card3.text": "EEG was acquired with a 64-channel Neuroscan SynAmps2 system. The released files contain preprocessed 62-channel EEG signals sampled at 200 Hz.",
    "dataset.card4.title": "Organization",
    "dataset.card4.text": "Data are arranged by subject folders <code>S01</code> to <code>S30</code>. Each subject folder contains 30 trial files named <code>s01.mat</code> to <code>s30.mat</code>.",
    "technical.aria": "Technical specifications",
    "technical.cnName.label": "Chinese name",
    "technical.cnName.value": "听障人群脑电情绪识别数据集",
    "technical.enName.label": "English name",
    "technical.enName.value": "HIED, Hearing-Impaired EEG Dataset",
    "technical.release.label": "Released data",
    "technical.release.value": "Preprocessed EEG time-series data in MATLAB <code>.mat</code> format; extracted features are not included.",
    "technical.layout.label": "Folder layout",
    "technical.layout.value": "<code>HIED/S01-S30</code>, 30 subject folders and 900 trial files in total.",
    "technical.variables.label": "MAT variables",
    "technical.variables.value": "<code>data</code>, <code>nbchan</code>, <code>srate</code>, and <code>times</code>; <code>data</code> is stored as channels by time points.",
    "technical.emotions.label": "Emotion categories",
    "technical.emotions.value": "Happiness, encouragement, neutral, anger, fear, and sadness.",
    "technical.acquisition.label": "Acquisition",
    "technical.acquisition.value": "Neuroscan SynAmps2, 64-channel Quik-Cap, AgCl electrodes, international 10-20 system, electrode impedance kept below 5 kOhm.",
    "technical.preprocessing.label": "Preprocessing",
    "technical.preprocessing.value": "Downsampling to 200 Hz, 1-75 Hz filtering, 49-51 Hz power-line suppression, bad-channel interpolation, TP9/TP10 re-reference, and ICA artifact removal.",
    "section.stimuli": "Movie Clips",
    "stimuli.title": "Movie Stimuli",
    "stimuli.intro": "HIED uses 30 Chinese-subtitled movie clips as affective stimuli, covering six discrete emotion categories with five clips per class. Clip ID, emotion label, title, start time, and duration provide the basic information needed to reproduce the stimulus design.",
    "stimuli.summary.clips": "movie clips",
    "stimuli.summary.emotions": "emotion categories",
    "stimuli.summary.perEmotion": "clips per emotion",
    "stimuli.summary.average": "average duration",
    "stimuli.groups.aria": "Movie clips grouped by emotion",
    "stimuli.table.no": "No.",
    "stimuli.table.emotion": "Emotion",
    "stimuli.table.title": "Movie title",
    "stimuli.table.start": "Start time",
    "stimuli.table.length": "Length",
    "stimuli.clipsSuffix": "clips",
    "stimuli.seconds": "s",
    "section.protocol": "Protocol",
    "protocol.title": "Experimental and Processing Pipeline",
    "preprocess.aria": "HIED preprocessing animation",
    "preprocess.kicker": "EEG signal preprocessing",
    "preprocess.title": "From raw EEG to clean trial-level signals.",
    "preprocess.text": "Before feature extraction, EEG signals are downsampled to 200 Hz and processed with a 1-75 Hz bandpass filter plus 49-51 Hz power-line suppression. Bad channels are interpolated, TP9/TP10 are used for re-reference, and ICA cleaning reduces ocular, muscle, cardiac, and environmental artifacts to produce stable trial-level EEG signals.",
    "preprocess.raw": "Raw EEG",
    "preprocess.clean": "Clean EEG",
    "preprocess.step1.title": "Downsample",
    "preprocess.step1.text": "Raw EEG is reduced to 200 Hz.",
    "preprocess.step2.title": "Filter",
    "preprocess.step2.text": "1-75 Hz bandpass and 49-51 Hz power-line suppression.",
    "preprocess.step3.title": "Interpolate",
    "preprocess.step3.text": "Bad channels are replaced using neighboring-channel averages.",
    "preprocess.step4.title": "Re-reference",
    "preprocess.step4.text": "TP9 and TP10 mastoids are used as reference electrodes.",
    "preprocess.step5.title": "ICA cleaning",
    "preprocess.step5.text": "Eye, muscle, cardiac, and environmental artifacts are reduced.",
    "protocol.pipeline.aria": "Experiment pipeline visualization",
    "protocol.pipe1": "Consent",
    "protocol.pipe2": "EEG Setup",
    "protocol.pipe3": "Movie Clips",
    "protocol.pipe4": "Self-rating",
    "protocol.pipe5": "Preprocessing",
    "protocol.pipe6": "Reviewed Access",
    "protocol.step1.title": "Recruitment and consent",
    "protocol.step1.text": "Participants received an explanation of the experiment through sign-language support and signed informed consent before EEG acquisition.",
    "protocol.step2.title": "Preparation",
    "protocol.step2.text": "The scalp was cleaned, the EEG cap was positioned using standard landmarks, conductive gel was applied, and electrode impedance was checked before recording.",
    "protocol.step3.title": "Emotion induction",
    "protocol.step3.text": "Before each trial, an emotion cue was shown. Participants then watched one Chinese-subtitled movie clip while EEG signals were recorded continuously.",
    "protocol.step4.title": "Rest and self-assessment",
    "protocol.step4.text": "Each trial included at least 15 s of rest after the clip, followed by about 1 min for self-assessment and experiment record completion.",
    "protocol.step5.title": "Signal preprocessing",
    "protocol.step5.text": "Raw EEG was downsampled, filtered, re-referenced, repaired for bad channels, and cleaned using independent component analysis to reduce eye, muscle, cardiac, and environmental artifacts.",
    "protocol.step6.title": "Dataset access",
    "protocol.step6.text": "After review, approved applicants may access preprocessed trial-level EEG signals and perform feature extraction, modeling, and validation according to their study design.",
    "section.baseline": "Baseline",
    "baseline.title": "Reference Method and Reported Results",
    "baseline.aria": "Reported baseline results",
    "baseline.header.feature": "Feature",
    "baseline.header.experiment": "Experiment",
    "baseline.header.accuracy": "Reported accuracy",
    "baseline.header.method": "Method",
    "baseline.row1.experiment": "Subject-dependent, six-class emotion recognition",
    "baseline.row2.experiment": "Subject-dependent, six-class emotion recognition",
    "baseline.row3.experiment": "Time-window comparison",
    "baseline.row3.accuracy": "Best at 3 s",
    "baseline.note": "The associated paper reports the Shifted EEG Channel Transformer method. The HIED package available by application contains preprocessed EEG signals and does not include extracted PSD or DE feature files.",
    "section.access": "Access",
    "access.title": "Request HIED EEG Data",
    "access.card.title": "Access Policy",
    "access.card.text": "Access to the preprocessed HIED EEG data requires review. Download the English or Chinese Word license agreement, complete the user information, sign it, and email it to the dataset contact address.",
    "access.req1": "The data are limited to academic or non-commercial research.",
    "access.req2": "Users should complete personal or PI information and sign the license agreement.",
    "access.req3": "The data must not be used to identify participants, transferred, shared, or publicly posted without permission.",
    "access.req4": "Please cite the associated paper when HIED is used in publications or research outputs.",
    "access.downloadFormEn": "Download English Agreement",
    "access.downloadFormCn": "Download Chinese Agreement",
    "form.title": "Prepare Application Email",
    "form.name": "Name",
    "form.namePlaceholder": "Enter applicant name",
    "form.affiliation": "Affiliation",
    "form.affiliationPlaceholder": "Enter institution or organization",
    "form.submit": "Open Email Client",
    "form.status": "Email draft opened. Please attach the completed and signed Word license agreement before sending.",
    "section.citation": "Citation",
    "citation.title": "Associated Publication",
    "citation.paper": "Zhongli Bai, Fazheng Hou, Kaixuan Sun, Qingzhou Wu, Mu Zhu, Zemin Mao, Yu Song, and Qiang Gao. <em>IEEE Journal of Biomedical and Health Informatics</em>, vol. 27, no. 10, pp. 4758-4767, 2023. DOI: <a href=\"https://doi.org/10.1109/JBHI.2023.3301993\">10.1109/JBHI.2023.3301993</a>.",
    "citation.openDoi": "Open DOI",
    "citation.copyBibtex": "Copy BibTeX",
    "citation.copied": "Copied",
    "citation.selectBibtex": "Select BibTeX",
    "section.contact": "Contact",
    "contact.title": "Dataset Team",
    "contact.email.title": "Contact Email",
    "footer.copyright": "© <span data-current-year>2026</span> HIED Dataset",
    "footer.access": "Access to preprocessed HIED EEG data requires application-form review.",
  },
};

const languageStorageKey = "hied-language-v4";
let currentLanguage = "en";

const getStoredLanguage = () => {
  try {
    return globalThis.localStorage?.getItem(languageStorageKey) || "";
  } catch {
    return "";
  }
};

const setStoredLanguage = (language) => {
  try {
    globalThis.localStorage?.setItem(languageStorageKey, language);
  } catch {
    // Language switching still works for the current page even when storage is unavailable.
  }
};

const storedLanguage = getStoredLanguage();
if (translations[storedLanguage]) {
  currentLanguage = storedLanguage;
}

const setTextAndMailto = (selector, email) => {
  document.querySelectorAll(selector).forEach((node) => {
    node.textContent = email;
    node.setAttribute("href", `mailto:${email}`);
  });
};

const setYear = () => {
  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });
};

const translatePlainText = (language) => {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    const value = translations[language][key];
    if (typeof value === "string") {
      node.textContent = value;
    }
  });
};

const translateHtml = (language) => {
  document.querySelectorAll("[data-i18n-html]").forEach((node) => {
    const key = node.dataset.i18nHtml;
    const value = translations[language][key];
    if (typeof value === "string") {
      node.innerHTML = value;
    }
  });
};

const translateAttributes = (language) => {
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const value = translations[language][node.dataset.i18nPlaceholder];
    if (typeof value === "string") {
      node.setAttribute("placeholder", value);
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((node) => {
    const value = translations[language][node.dataset.i18nAriaLabel];
    if (typeof value === "string") {
      node.setAttribute("aria-label", value);
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((node) => {
    const value = translations[language][node.dataset.i18nAlt];
    if (typeof value === "string") {
      node.setAttribute("alt", value);
    }
  });
};

const updateLanguageButtons = (language) => {
  document.querySelectorAll("[data-language-option]").forEach((button) => {
    const isActive = button.dataset.languageOption === language;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
};

const getFormValue = (form, fieldName) => {
  const value = new FormData(form).get(fieldName);
  return typeof value === "string" ? value.trim() : "";
};

const buildApplicationEmail = (form) => {
  const name = getFormValue(form, "name");
  const affiliation = getFormValue(form, "affiliation");
  const subjectName = name || (currentLanguage === "zh" ? "申请人" : "Applicant");
  const subject = `${datasetConfig.emailSubjectPrefix} ${datasetConfig.datasetName} - ${subjectName}`;

  if (currentLanguage === "zh") {
    return {
      subject,
      body: [
        "HIED 数据集团队您好：",
        "",
        "我希望申请 HIED 听障人群脑电情绪识别数据集的预处理 EEG 数据。",
        "",
        `申请人：${name || "请填写"}`,
        `单位：${affiliation || "请填写"}`,
        "",
        "我将随邮件附上已填写并签署的 Word 许可协议，并承诺按协议使用 HIED 数据。",
        "",
        "谢谢！",
      ].join("\n"),
    };
  }

  return {
    subject,
      body: [
        "Dear HIED Dataset Team,",
        "",
        "I would like to request access to the preprocessed EEG data in the HIED Hearing-Impaired EEG Dataset.",
      "",
      `Applicant: ${name || "Please complete"}`,
      `Affiliation: ${affiliation || "Please complete"}`,
      "",
      "I will attach the completed and signed Word license agreement to this email and will use HIED data according to the agreement.",
      "",
      "Thank you.",
    ].join("\n"),
  };
};

const renderMovieTable = (language) => {
  const table = document.querySelector("[data-movie-table]");
  if (!table) return;
  const labels = {
    no: translations[language]["stimuli.table.no"],
    emotion: translations[language]["stimuli.table.emotion"],
    title: translations[language]["stimuli.table.title"],
    start: translations[language]["stimuli.table.start"],
    length: translations[language]["stimuli.table.length"],
  };
  table.innerHTML = movieClips
    .map((clip) => {
      const emotion = translations[language][`emotion.${clip.emotion}`];
      const title = language === "zh" ? clip.zh : clip.en;
      return `<tr>
        <td data-label="${labels.no}">${String(clip.no).padStart(2, "0")}</td>
        <td data-label="${labels.emotion}"><span class="emotion-pill ${clip.emotion}">${emotion}</span></td>
        <td data-label="${labels.title}">${title}</td>
        <td data-label="${labels.start}">${clip.start}</td>
        <td data-label="${labels.length}">${clip.length} ${translations[language]["stimuli.seconds"]}</td>
      </tr>`;
    })
    .join("");
};

const renderEmotionGroups = (language) => {
  const grid = document.querySelector("[data-emotion-groups]");
  if (!grid) return;
  grid.innerHTML = emotionOrder
    .map((emotion) => {
      const clips = movieClips.filter((clip) => clip.emotion === emotion);
      const titles = clips
        .map((clip) => `<li><span>${String(clip.no).padStart(2, "0")}</span>${language === "zh" ? clip.zh : clip.en}</li>`)
        .join("");
      return `<article class="movie-group ${emotion}">
        <div>
          <h3>${translations[language][`emotion.${emotion}`]}</h3>
          <p>${clips.length} ${translations[language]["stimuli.clipsSuffix"]}</p>
        </div>
        <ol>${titles}</ol>
      </article>`;
    })
    .join("");
};

const applyLanguage = (language) => {
  currentLanguage = translations[language] ? language : "en";
  const dictionary = translations[currentLanguage];

  document.documentElement.lang = dictionary.languageCode;
  document.title = dictionary.title;

  const description = document.querySelector("[data-i18n-meta-description]");
  if (description) {
    description.setAttribute("content", dictionary.metaDescription);
  }

  translatePlainText(currentLanguage);
  translateHtml(currentLanguage);
  translateAttributes(currentLanguage);
  renderMovieTable(currentLanguage);
  renderEmotionGroups(currentLanguage);
  updateLanguageButtons(currentLanguage);
  setTextAndMailto("[data-contact-email]", datasetConfig.contactEmail);
  setYear();
  setStoredLanguage(currentLanguage);
};

document.querySelectorAll("[data-language-option]").forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.languageOption);
  });
});

const bibtex = document.querySelector("[data-bibtex]");
const copyButton = document.querySelector("[data-copy-bibtex]");

if (copyButton && bibtex) {
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(bibtex.textContent.trim());
      copyButton.textContent = translations[currentLanguage]["citation.copied"];
      window.setTimeout(() => {
        copyButton.textContent = translations[currentLanguage]["citation.copyBibtex"];
      }, 1800);
    } catch {
      copyButton.textContent = translations[currentLanguage]["citation.selectBibtex"];
      bibtex.focus();
    }
  });
}

const applicationForm = document.querySelector("[data-application-form]");

if (applicationForm) {
  applicationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = applicationForm.querySelector("[data-form-status]");
    const email = buildApplicationEmail(applicationForm);
    const mailto = `mailto:${datasetConfig.contactEmail}?subject=${encodeURIComponent(email.subject)}&body=${encodeURIComponent(email.body)}`;
    window.location.href = mailto;
    if (status) {
      status.textContent = translations[currentLanguage]["form.status"];
    }
  });
}

applyLanguage(currentLanguage);
