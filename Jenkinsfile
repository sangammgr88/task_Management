pipeline {
  agent any

  environment {
    GITHUB_TOKEN = credentials('github-token') // optional if needed for private repo
  }

  stages {
    stage('Clone Repo') {
      steps {
        git credentialsId: 'github-token', url: 'https://github.com/yourname/your-repo.git'
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
