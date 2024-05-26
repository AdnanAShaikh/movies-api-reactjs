pipeline{
    agent any
    stages{
        stage('Npm'){
            steps{
                sh 'npm install'
            }

        }
        stage('Build'){
            steps{
                sh 'npm run build'
            }
        }
    }
}