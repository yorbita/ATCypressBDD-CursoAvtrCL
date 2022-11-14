pipeline {
      agent { label 'nodo-windows' }

        stages {

          stage ('COMPILAR') {
                steps {
                    bat 'npm install '
                } 
            }

            stage ('TESTS E2E') {
                steps {
                    bat 'npx cypress run --spec cypress/integration/Suite-AdvantageShoppingOnline/Login.feature'
                }
            }
  
          }

    }
