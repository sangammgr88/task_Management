pipeline {
  agent any
  
  stages {
    stage('Clone Repo') {
      steps {
        git 'https://github.com/sangammgr88/task_Management.git'
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
