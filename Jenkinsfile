node {
  stage('Checkout') {
    checkout scm
  }
  stage('NPM Install & NG Build') {
    docker.image('node:6-alpine').inside() {
      sh '''
        npm install
        npm install @angular/cli
        ng build
      '''
    }
  }
}
