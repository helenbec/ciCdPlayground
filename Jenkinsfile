pipeline {
    agent any

    tools {
        nodejs 'yarn'
    }

    stages {
        stage('Build') {
            steps {
                git 'https://github.com/helenbec/ciCdPlayground.git'
                sh 'yarn'
                sh 'yarn build'
            }
        }
        stage('Test') {
            steps {
                sh 'yarn test'
                sh 'yarn test:e2e'
            }
        }
        stage('Results') {
            steps {
                junit 'reports/*.xml'
            }
        }
    }
}
