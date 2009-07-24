---
title: Getting Started
layout: default
---

Getting started
---------------

FROM BINARY PACKAGES:

coming....

FROM SOURCE:

**Make sure the following are installed:**

 * [Java 5 SDK](http://java.sun.com)
 * [Apache Maven 2.x] (http://maven.apache.org)
 * [Git](http://www.git-scm.org)

Checkout the main (platform) project from github:

	git clone git://github.com/idega/com.idega.block.platform.git
	
Add the idega maven repository to your settings.xml (under ~/.m2)

	<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
	  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	  xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0
	                      http://maven.apache.org/xsd/settings-1.0.0.xsd">
	  <profiles>
	    <profile>
	     <id>idega</id>
	      <repositories>
	        <repository>
	          <id>idega1</id>
	          <name>Idega Main Repository</name>
	          <url>http://repository.idega.com/maven2</url>
	          <releases>
	            <enabled>true</enabled>
	            <updatePolicy>always</updatePolicy>
	            <checksumPolicy>warn</checksumPolicy>
	          </releases>
	          <snapshots>
	            <enabled>true</enabled>
	            <checksumPolicy>fail</checksumPolicy>
	          </snapshots>
	          <layout>default</layout>
	        </repository>
	      </repositories>
	      <pluginRepositories>
	      </pluginRepositories>
	    </profile>
	  </profiles>
	  <activeProfiles>
	    <activeProfile>idega</activeProfile>
	  </activeProfiles>
	</settings>

Build all modules with maven:

	cd com.idega.block.platform
	mvn clean install