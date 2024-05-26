pipeline{
    agent any
    stages{
        stage('Npm'){
            steps{
                bat 'npm install'
            }

        }
        stage('Build'){
            steps{
                bat 'npm run build'
            }
        }
    }
}