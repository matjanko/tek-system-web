node {
  stage('Checkout') {
    checkout scm
  }
  stage('NPM Install & NG Build') {
    docker.image('teracy/angular-cli').inside() {
      sh '''
        npm install
        ng build
      '''
    }
  }
}
