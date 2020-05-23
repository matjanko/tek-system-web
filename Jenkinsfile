node {
  def container

  stage('Checkout') {
    checkout scm
  }
  stage('NPM Install & NG Build') {
    docker.image('node:12.16.1-alpine').inside() {
      sh '''
        npm install
        npm run build
      '''
    }
  }
  stage('Docker build') {
    container = docker.build('tek-system-web:$BUILD_NUMBER')
  }
  stage('Docker stop') {
    try {
      sh '''
        docker stop tek-system-web
        docker rm tek-system-web
      '''
    } catch (Exception e) {
      e.getMessage()
    }
  }
  stage('Docker run') {
    container.run('-p 9595:80 --name tek-system-web --restart=always')
  }
}
