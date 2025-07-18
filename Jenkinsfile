pipeline {
  agent any

  environment {
    MONGO_URI = credentials('mongo-uri')
    JWT_SECRET = credentials('jwt-secret')
    API_URL = credentials('api-url') // For frontend use
  }

  stages {
    stage('Frontend: Install & Build') {
      steps {
        dir('frontend') {
          bat '''
            echo "REACT_APP_API_URL=${API_URL}" > .env
            npm install
            npm run build
          '''
        }
      }
    }

    stage('Backend: Install & Start') {
      steps {
        dir('backend') {
          bat '''
            echo "MONGO_URI=${MONGO_URI}" > .env
            echo "JWT_SECRET=${JWT_SECRET}" >> .env
            npm install
            nohup node server.js > output.log 2>&1 &
          '''
        }
      }
    }
  }

  post {
    success {
      echo '✅ Build completed successfully.'
    }
    failure {
      echo '❌ Build failed.'
    }
  }
}
