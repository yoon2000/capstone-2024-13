<h1 align="center">
	아니 근데 오늘 진짜
</h1>

<br/>

<h3 align="center">
	AI 대화형 일기 서비스
</h3>

<h3 align="center">
	Diary service with AI conversation
</h3>

<br/>
<br/>

<div align="center">
	<img src="https://img.shields.io/badge/-Nginx-009639?style=flat-square&logo=Nginx&logoColor=white">
	<img src="https://img.shields.io/badge/-NextJS-000000?style=flat-square&logo=nextdotjs&logoColor=white">
	<img src="https://img.shields.io/badge/-NestJS-E0234E?style=flat-square&logo=NestJS&logoColor=white">
	<img src="https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white">
	<img src="https://img.shields.io/badge/-Flask-000000?style=flat-square&logo=Flask&logoColor=white">
</div>

<br/>
<br/>

<h2 align="center">
	<a href="https://you-know-what.com">배포 페이지</a>
</h2>
<h4 align="center">
	<a href="https://drive.google.com/file/d/18bqswDEOVcPu1D90FBGsr8glIwOlZeSm/view?usp=sharing">
		중간 발표 자료
	</a>
	&nbsp;·&nbsp;
	<a href="https://drive.google.com/file/d/1XJN7Vt2rrojm7XwnVydat9RvGgAZMH4X/view?usp=drive_link">
		중간 보고서
	</a>
</h4>

<br/>
<br/>

## Index

-   [Abstract](#abstract)
-   [Requirements](#requirements)
-   [Install](#install)
-   [Software Architecture](#software-architecture)
-   [Preview](#preview)
-   [Licence](#licence)
-   [Contact](#contact)

<br/>
<br/>

## Abstract

<br/>
<br/>

## Requirements

### [Docker](https://www.docker.com)

-   Download docker for your OS

#### Current version of docker with this repository

-   Docker version 25.0.3
-   Docker Compose version v2.24.5-desktop.1

### Make

#### Install make for your OS

<br/>
<br/>

## Install

### .env

    $ cp .env.sample .env

-   Set your own value of environment variables in `.env` file
-   **You have to protect your `.env` file from being exposed to the public**

<br/>

### Dockerfile

-   You can change the contents of the Dockerfile to suit your needs.

<br/>

### Volumes

-   Check the volumes' path in the `docker-compose.yml` file
-   The path will be mounted to the container

<br/>
<br/>

## Usage

### Supported Makefile commands

-   `make (up)`: Run and build containers, networks, volumes and images
-   `make down`: Stop and remove containers, networks, volumes and images
-   `make start`: Start containers
-   `make stop`: Stop containers

### Status

-   You can get the status of the containers with `docker ps`
-   You can get the log of the containers with `docker logs <container_name>`

<br/>
<br/>

## Software Architecture

![Software Architecture](./assets/Software%20Architecture.png)

<br/>
<br/>

## Preview

<div width="100%">
	<img src="https://github.com/kookmin-sw/capstone-2024-13/assets/55086725/4a7bb561-a855-4a68-8bf1-a2bdf52f3ad5" width="30%" height="30%" alt="Home preview image">
	<img src="https://github.com/younganswer/capstone/assets/55086725/354a7c09-5bc2-45a8-8140-1614571582b8" width="30%" height="30%" alt="Diary preview image">
	<img src="https://github.com/kookmin-sw/capstone-2024-13/assets/55086725/d8b149c8-14c2-45b8-8bcf-c517cc44abe2" width="30%" height="30%" alt="Mypage preview image">
</div>

<br/>
<br/>

## Licence

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

<br/>
<br/>

## Contact

#### 장정안 (팀장) &nbsp;&nbsp;[@jeongahn](https://github.com/jeongahn)

<img align="left" src="https://github.com/kookmin-sw/capstone-2024-13/assets/55086725/1e1510b1-ef67-4b51-a26f-c43732682617" width="148" height="160" alt="jeongahn">

```
Student ID: 20191658
Email: inetty@kookmin.ac.kr
Role: Offensive Security Researcher, Front-end Developer
	• 코드 취약점 분석
	• 버그 패턴 분석 및 버그 픽스
	• 보안 컨설팅 (서비스 보안 요소 문서화)
	• NextJS 프론트 개발
```

<br/>
<br/>

#### 황영서 &nbsp;&nbsp;[@younganswer](https://github.com/younganswer)

<img align="left" src="https://github.com/younganswer/capstone/assets/55086725/71a27285-3ab5-4829-a82f-16e9af05dcd5" width="148" height="148" alt="younganswer">

```
Student ID: 20191691
Email: younganswer@kookmin.ac.kr
Role: Cloud Engineer, Full Stack Developer
	• AWS 서비스 구축
	• 시스템 Dockerize
	• NextJS, NestJS 풀스택 개발
```

<br/>
<br/>

#### 윤현승 &nbsp;&nbsp;[@yoon2000](https://github.com/yoon2000)

<img align="left" src="https://github.com/younganswer/capstone/assets/55086725/dce87a63-8710-4f3e-b134-ff55cf87bcf0" width="148" height="148" alt="yoon2000">

```
Student ID: 20191634
Email: yoonhs02@kookmin.ac.kr
Role: Full stack Developer
	• 데이터베이스 스키마 구조 설계
	• API 문서 작성 및 백엔드 개발
	• NextJS를 활용한 프론트엔드 개발
```

<br/>
<br/>

#### 조현준 &nbsp;&nbsp;[@hyunjoon0208](https://github.com/hyunjoon0208)

<img align="left" src="https://github.com/younganswer/capstone/assets/55086725/8c76e63a-607f-4002-b6ff-a693b20ff926" width="148" height="148" alt="hyunjoon0208">

```
Student ID: 20191674
Email: juatis96@kookmin.ac.kr
Role: MLOps
	• STT, TTS 모델 구현 및 학습
	• AI API 개발 및 배포
```

<br/>
<br/>

#### 최선우 &nbsp;&nbsp;[@woonsango](https://github.com/woonsango)

<img align="left" src="https://github.com/younganswer/capstone/assets/55086725/a1a824ba-6fbc-47a3-9d9d-6b9c2e5e4302" width="148" height="148" alt="woonsango">

```
Student ID: 20223149
Email: doldol9080@kookmin.ac.kr
Role: AI Developer
	• LLM fine tuning
	• Prompt Engineering
	• Image Captioning
```
