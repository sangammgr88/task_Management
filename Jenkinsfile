pipeline {
  agent any

 environment {
    GITHUB_TOKEN = credentials('642481f4-60e6-4a1b-b03d-a1f48338a728') // optional if needed for private repo
  }
  
  stages {
    stage('Clone Repo') {
      steps {
        git credentialsId: '642481f4-60e6-4a1b-b03d-a1f48338a728', url: 'https://github.com/sangammgr88/task_Management.git'
      }
    }

    stage('Build & Run with Docker Compose') {
      steps {
        bat 'docker-compose down || exit 0'
        bat 'docker-compose build'
        bat 'docker-compose up -d'
      }
    }
  }

  post {
    success {
      echo '✅ App deployed using Docker!'
    }
    failure {
      echo '❌ Build or deployment failed.'
    }
  }
}
