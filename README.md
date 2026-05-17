# HIED Hearing-Impaired EEG Dataset

HIED, the Hearing-Impaired EEG Dataset, is a preprocessed EEG emotion-recognition dataset collected from hearing-impaired participants while they watched affective movie clips. The dataset is intended for research in affective computing, brain-computer interaction, and inclusive emotion recognition.

中文名称：听障人群脑电情绪识别数据集。

Website: https://baizzl.github.io/hied-dataset/

## Overview

HIED records EEG activity from 30 hearing-impaired student participants during movie-based emotion induction. The stimulus set covers six emotion categories: happiness, encouragement, neutral state, anger, fear, and sadness. The released data package provides preprocessed EEG time-series signals and does not include extracted PSD, DE, or other feature files.

The preprocessed EEG data are not stored in this public repository. Access requires submitting a completed and signed license agreement for review.

## Dataset Summary

| Item | Description |
| --- | --- |
| Dataset name | HIED, Hearing-Impaired EEG Dataset |
| Chinese name | 听障人群脑电情绪识别数据集 |
| Participants | 30 hearing-impaired students, including 12 female and 18 male participants |
| Mean age | 22 years |
| Stimuli | 30 Chinese-subtitled movie clips across six emotion categories |
| Acquisition | 64-channel Neuroscan SynAmps2 system, Quik-Cap, AgCl electrodes, international 10-20 layout |
| Released signal | Preprocessed 62-channel EEG time-series |
| Sampling rate | 200 Hz after preprocessing |
| File format | MATLAB `.mat` files |
| File structure | `HIED/S01-S30`, with 30 trial files per subject |
| Data volume | 900 trial files, about 9.0 GB |

## Released Files

The released EEG package is organized by subject folders from `S01` to `S30`. Each subject folder contains 30 trial files named `s01.mat` to `s30.mat`.

Each `.mat` file contains:

| Variable | Description |
| --- | --- |
| `data` | EEG signal matrix stored as channels by time points |
| `nbchan` | Number of EEG channels |
| `srate` | Sampling rate |
| `times` | Time axis |

## Preprocessing

Before feature extraction, EEG signals were preprocessed to improve signal quality and produce stable trial-level time-series files. The preprocessing workflow includes:

1. Downsampling to 200 Hz.
2. 1-75 Hz bandpass filtering.
3. 49-51 Hz power-line suppression.
4. Bad-channel interpolation using neighboring-channel information.
5. Re-reference using TP9 and TP10 mastoid electrodes.
6. ICA-based artifact removal for ocular, muscle, cardiac, and environmental artifacts.

## Experimental Pipeline

1. Participants received an explanation of the experiment with sign-language support and completed informed consent.
2. The EEG cap was positioned, conductive gel was applied, and electrode impedance was checked.
3. Each trial began with an emotion cue.
4. Participants watched one Chinese-subtitled movie clip while EEG signals were recorded continuously.
5. Each clip was followed by at least 15 seconds of rest and about 1 minute of self-assessment and experiment recording.
6. Raw EEG was preprocessed and organized into trial-level files for reviewed access.

## Movie Stimuli

HIED uses 30 Chinese-subtitled movie clips as affective stimuli. Each of the six emotion categories contains five clips. Clip durations range from 182 seconds to 373 seconds, with an average duration of 231.37 seconds.

| No. | Emotion | Movie title | Chinese title | Start time | Length |
| --- | --- | --- | --- | --- | --- |
| 01 | Encouragement | Facing the Giants | 面对巨人 | 0:44:30 | 373 s |
| 02 | Sadness | Tangshan Earthquake | 唐山大地震 | 0:19:36 | 205 s |
| 03 | Anger | Cry Me A Sad River | 悲伤逆流成河 | 1:25:00 | 242 s |
| 04 | Anger | Shaolin Soccer | 少林足球 | 1:29:09 | 258 s |
| 05 | Neutral | World Heritage In China | 世界遗产在中国：黄山 | 0:00:53 | 226 s |
| 06 | Happiness | Lost In Thailand | 人再囧途之泰囧 | 0:06:12 | 238 s |
| 07 | Encouragement | Pioneer | 革命者 | 1:46:30 | 269 s |
| 08 | Encouragement | Rocky | 洛奇 | 1:01:43 | 198 s |
| 09 | Sadness | Tangshan Earthquake | 唐山大地震 | 1:48:18 | 205 s |
| 10 | Anger | Shaolin Soccer | 少林足球 | 1:35:04 | 210 s |
| 11 | Anger | The Matrix | 黑客帝国 | 1:22:19 | 284 s |
| 12 | Neutral | World Heritage In China | 世界遗产在中国：苏州古典园林 | 0:03:00 | 221 s |
| 13 | Happiness | Lost In Thailand | 人再囧途之泰囧 | 1:05:03 | 204 s |
| 14 | Encouragement | Leap | 夺冠 | 0:45:50 | 205 s |
| 15 | Encouragement | Pioneer | 革命者 | 1:03:10 | 254 s |
| 16 | Fear | Deathly Stillness | 死寂 | 1:10:43 | 182 s |
| 17 | Fear | The Conjuring | 招魂 | 1:14:23 | 200 s |
| 18 | Anger | Better Days | 少年的你 | 1:08:31 | 240 s |
| 19 | Fear | Coming Soon | 厉鬼将映 | 0:01:57 | 192 s |
| 20 | Sadness | Back to 1942 | 一九四二 | 0:49:58 | 242 s |
| 21 | Fear | Coming Soon | 厉鬼将映 | 1:09:13 | 189 s |
| 22 | Happiness | Flirting Scholar | 唐伯虎点秋香 | 1:18:57 | 266 s |
| 23 | Neutral | World Heritage In China | 世界遗产在中国 | 0:10:40 | 184 s |
| 24 | Sadness | Back to 1942 | 一九四二 | 2:01:21 | 240 s |
| 25 | Fear | Deathly Stillness | 死寂 | 0:54:50 | 211 s |
| 26 | Neutral | World Heritage In China | 世界遗产在中国 | 0:10:41 | 240 s |
| 27 | Happiness | A Chinese Odyssey Part One: Pandora's Box | 大话西游之月光宝盒 | 0:11:32 | 241 s |
| 28 | Sadness | Back to 1942 | 一九四二 | 2:16:37 | 240 s |
| 29 | Neutral | World Heritage In China | 世界遗产在中国 | 0:05:36 | 240 s |
| 30 | Happiness | A Chinese Odyssey Part One: Pandora's Box | 大话西游之月光宝盒 | 0:35:00 | 242 s |

## Baseline Reference

The associated publication reports the Shifted EEG Channel Transformer method for six-class emotion recognition. The requestable HIED data package contains preprocessed EEG signals only; extracted feature files are not part of the public request package.

| Feature | Experiment setting | Reported result | Method |
| --- | --- | --- | --- |
| DE | Subject-dependent six-class emotion recognition | 84.76% | SECT |
| PSD | Subject-dependent six-class emotion recognition | 82.51% | SECT |
| DE / PSD | Time-window comparison | Best with 3 s windows | SECT |

## Dataset Access

Access to the preprocessed HIED EEG data requires review. Please download and complete one of the license agreements, sign it, then email it to the dataset contact address.

- English license agreement: `HIED_Data_Request_Form_EN.docx`
- Chinese license agreement: `HIED_Data_Request_Form_CN.docx`
- Contact email: jasonsongrain@hotmail.com

Use requirements:

1. The intended use should be academic or non-commercial research.
2. Users should complete personal, PI, supervisor, or institutional contact information.
3. The data must not be used to identify participants.
4. The data must not be transferred, shared, publicly posted, or redistributed without permission.
5. Publications or research outputs using HIED should cite the associated paper.

## Citation

Zhongli Bai, Fazheng Hou, Kaixuan Sun, Qingzhou Wu, Mu Zhu, Zemin Mao, Yu Song, and Qiang Gao. "SECT: A Method of Shifted EEG Channel Transformer for Emotion Recognition." IEEE Journal of Biomedical and Health Informatics, vol. 27, no. 10, pp. 4758-4767, 2023. DOI: https://doi.org/10.1109/JBHI.2023.3301993

```bibtex
@article{bai2023sect,
  title={SECT: A Method of Shifted EEG Channel Transformer for Emotion Recognition},
  author={Bai, Zhongli and Hou, Fazheng and Sun, Kaixuan and Wu, Qingzhou and Zhu, Mu and Mao, Zemin and Song, Yu and Gao, Qiang},
  journal={IEEE Journal of Biomedical and Health Informatics},
  volume={27},
  number={10},
  pages={4758--4767},
  year={2023},
  doi={10.1109/JBHI.2023.3301993}
}
```
