---
title: Getting Started
layout: default
---

Getting started
---------------

The initial user login is Administrator/idega

The idega platform supports the [RapidWeaver](http://www.realmacsoftware.com/rapidweaver/) theme format (packaged as a zip).
To get started with a portal layout it is easiest to upload a theme (Under The Lucid/Themes option under the Workspace UI).

Here is a simple theme you can download to get started: 

<a href="https://github.com/idega/eGov.rwtheme/blob/master/src/eGov.rwtheme.zip?raw=true"><img style="width: 128px;" src="images/egovthemeicon.png"/></a>

**BUILDING FROM SOURCE - FROM HEAD/"Development branch":**

The main development site for the idega platform is [here](http://github.com/idega) on Github where all the submodules available for the idega plaform are hosted and located. You need to use your [GitHub](https://github.com/) account in order to download the code.

**Make sure the following are installed for building and compiling:**

 * [Java 8 JDK](https://www.java.com/en/download/)
 * [Apache Maven 3.x](https://maven.apache.org/download.cgi)
 * [Git](http://www.git-scm.org)

For running you will need a Java EE Servet container and a an SQL database.

**Tomcat and MySQL are recommended:**

 * [Tomcat 7.x](https://tomcat.apache.org) 
 * [MySQL 5.7.x](https://www.mysql.com). Make sure lower and upper cases are enabled for tables names in MySQL [config](https://dba.stackexchange.com/questions/59407/how-to-make-mysql-table-name-case-insensitive-in-ubuntu).

Now Checkout the main (platform) project from github:

	git clone git://github.com/idega/com.idega.block.platform.git
	cd com.idega.block.platform
	git checkout BRANCH_PLATFORM_5
	git submodule init
	git submodule update
	git submodule foreach git checkout BRANCH_PLATFORM_5
	git submodule foreach git pull

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
	
	
Do the same with the addon and egov modules

	git clone git://github.com/idega/com.idega.block.addon.git
	cd com.idega.block.addon
	git checkout BRANCH_PLATFORM_5
	git submodule init
	git submodule update
	git submodule foreach git checkout BRANCH_PLATFORM_5
	git submodule foreach git pull
	mvn clean install
	
and:

	git clone git://github.com/idega/com.idega.block.egov.git
	cd com.idega.block.egov
	git checkout BRANCH_PLATFORM_5
	git submodule init
	git submodule update
	git submodule foreach git checkout BRANCH_PLATFORM_5
	git submodule foreach git pull
	mvn clean install

Checkout the Idega's Maven plugin to build WAR file:

	git clone git://github.com:idega/com.idega.maven.webapp.git
	cd com.idega.maven.webapp
	git checkout BRANCH_PLATFORM_5
	mvn clean install
	
Now checkout the main idega webapp:

	git clone git://github.com/idega/idega-webapp-base.git
	cd idega-webapp-base
	git checkout BRANCH_PLATFORM_5
	mvn clean package install
	
Now under the target you have a ready built Java webapp or WAR archive

Deploy the webapp into your Tomcat installation e.g. by directing tomcat to it with a context file.

Create a file in your Tomcat installation under conf/Catalina/localhost named ROOT.xml:

	<Context path="" docBase="[WEBAPP_FOLDER]/target/idega-base-webapp-5.0.0-SNAPSHOT" reloadable="false" debug="0" swallowOutput="true" liveDeploy="false">
	
	<Resource name="jdbc/DefaultDS" type="javax.sql.DataSource"
	        url="jdbc:mysql://localhost/[DATABASENAME]?autoReconnect=true"
	        driverClassName="com.mysql.jdbc.Driver"
	        username="[DBUSER]"
	        password="[DBPASSWORD]"
	        maxActive="20"
	        maxIdle="5"
	        maxWait="10000"
	        removeAbandoned="true"
	        removeAbandonedTimeout="300"
	        logAbandoned="true"
	        testOnBorrow="true"
	        validationQuery="SELECT 1"
	  />
	
	</Context>


If you run under the "/" (ROOT) context you will first need to remove the Tomcat default ROOT webapplication under webapps folder, and you will ned to create and specify the database that you point the system to and install a JDBC library jar file (in the tomcat's lib folder). The JDBC library for MySQL can be downloaded from Mysql [here](http://dev.mysql.com/downloads/connector/j/).

It is recommended to set Java options to increase the default memory allocation by setting the CATALINA_OPTS variable in your bin/startup.sh or bin/startup.bat like e.g.:

	export CATALINA_OPTS="-Xmx1g -XX:MaxPermSize=512m -Dfile.encoding=UTF-8 -Djava.awt.headless=true -XX:+HeapDumpOnOutOfMemoryError -XX:MinHeapFreeRatio=20 -XX:MaxHeapFreeRatio=40"

Now start the Tomcat with bin/startup.sh or bin/startup.bat

If everything went successfully you whould now have a running webapplication on [http://localhost:8080](http://localhost:8080).
The default login is Administrator/idega.
