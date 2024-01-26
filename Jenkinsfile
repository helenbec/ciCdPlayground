pipeline {
    agent any

    tools {
        nodejs 'yarn'
    }

    stages {
        stage('Build') {
            steps {
                git checkout https://github.com/helenbec/ciCdPlayground.git
                yarn
                yarn build
            }
            stage('Test') {
                steps {
                    yarn test
                    yarn test:e2e
                }
            }
            stage('Deploy') {
                steps {
                junit 'reports/*.xml'
                }
            }
        }
    }
}
