node {
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
}
