# Laboratorio 6.1: Despliegue de una Aplicación Web Estática con CI/CD

**Alumno:** Arancibia Aguilar Daniel Andree  
**Fecha:** Mayo 2026  
**Asignatura:** Computación en la Nube

---

## **1. Objetivo del Laboratorio**

Implementar un pipeline completo de **Continuous Integration / Continuous Deployment (CI/CD)** para desplegar una aplicación web estática en **Amazon S3**, utilizando **GitHub Actions** como orquestador de despliegue automático.

---

## **2. Descripción del Proyecto**

Se desarrolló una aplicación web estática utilizando **Vite**. El objetivo fue configurar un flujo automatizado que, al hacer push o merge a la rama principal, compile la aplicación y la despliegue automáticamente a un bucket de Amazon S3 configurado como sitio web estático.

**Tecnologías utilizadas:**

- Frontend: Vite
- Hosting: Amazon S3 (Static Website Hosting)
- CI/CD: GitHub Actions
- Autenticación: IAM User + GitHub Secrets

---

## **3. Recursos Configurados en AWS**

**Bucket S3 para Hosting Estático**
![Bucket S3 Configurado](./img/8afba75aceecf22844df2573d3ef43ca.png)

**Usuario IAM con permisos para S3**
![Usuario IAM](./img/256fd5391832010e0a6acbffd2438037.png)

---

## **4. Configuración en GitHub**

**Secrets configurados en el repositorio**
![GitHub Secrets](./img/dcc7763f7a79f17cd8ff1b713527915a.png)

**Variables de GitHub**
![GitHub Variables](./img/421905b6e8960476469b81930de1b6d3.png)

---

## **5. Pipeline CI/CD (deploy.yml)**

**Archivo de Workflow: `.github/workflows/deploy.yml`**
![Workflow deploy.yml](./img/5df6b00d09ede5ca310edfbf21258428.png)

**Historial de Workflows en GitHub Actions**
![Historial de Workflows](./img/7a5b918e3168607f580d0f19df6ea6ed.png)

---

## **6. Evidencias del Despliegue**

**Proyecto desarrollado con Vite**
![Proyecto Vite](./img/c36967bc98154741aa645f20936f161e.png)

**Aplicación Web Estática Desplegada**
![Web Estática Desplegada](./img/09fc98c5ca821ae69e757438b7fd7c42.png)

**Actualización exitosa de la aplicación (despliegue automático)**
![Web Estática Actualizada](./img/c866694c03d3fadae816c8c11fb2f2f3.png)

---

## **7. Conclusiones **

Este laboratorio permitió implementar un pipeline completo de **CI/CD** para aplicaciones web estáticas, logrando:

- Automatización total del proceso de despliegue.
- Reducción significativa del tiempo entre desarrollo y producción.
- Uso seguro de credenciales mediante GitHub Secrets.
- Hosting económico y escalable con Amazon S3.
