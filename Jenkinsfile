pipeline {
  agent any
    environment {
        NODE_VERSION = '22'
    }
    stages {
        // --- ETAPA 1: CLONAR REPOSITORIO ---
        stage('Clonar Repositorio') {
            steps {
                echo "** Clonando repositorio desde GitHub **"
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/main']],
                    userRemoteConfigs: [[url: 'https://github.com/drojaslopez/taller_jenkins.git']]
                ])
            }
        }
    
        // --- ETAPA 2: INSTALAR DEPENDENCIAS ---
        stage('Instalar Dependencias') {
            steps {
                script {
                    try {
                        echo "⚙️ Instalando dependencias..."
                        bat 'npm install'
                    } catch (Exception e) {
                        error("❌ Error en la etapa de dependencias")
                    }
                }
            }
        }
        // --- ETAPA 3: EJECUTAR PRUEBAS ---
        
        // --- ETAPA 4: CONSTRUIR Y EJECUTAR DOCKER ---
        stage('Docker') {
            steps {
                script {
                    echo "🐳 Construyendo imagen Docker..."
                    bat "docker build -t taller_jenkins ."
                    echo "▶️ Ejecutando contenedor Docker..."
                    bat "docker run -d -p 3000:3000 taller_jenkins"
                }
            }
        } 
    }   
}