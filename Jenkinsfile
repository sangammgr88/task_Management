pipeline {
  agent any

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t taskmanager-image .'
      }
    }

    stage('Run Container') {
      steps {
        sh '''
          docker stop myapp-container || true
          docker rm myapp-container || true
          docker run -d -p 3000:3000 --name myapp-container myapp-image
        '''
      }
    }
  }
}
