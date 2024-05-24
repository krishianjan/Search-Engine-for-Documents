Assignment 4

#Project Name

Inventory Management


#Overview

This project creates an inventory management user interface which takes in user input for themsleves and products and organizes this information into viewable tables. These tables are supported by a backend database, postgreSQL, which is connected to the project via a configuration in settings.py. These tables are intially designed in models.py and migrated over to the database following a successful configuration where they are materialized in postgreSQL. The following files in the django project are configured with respect to this database and this array of python and html files allow for the user end of a webpage to connected to and predicated off of the database. This visualized front end is displayed on a webpage configured to localhost from which a user interacts with various pages of specific functionailities such as registration and much more. These pages are designed by multiple html files for each operation and are configured to take in user input which is communicated back to the python files such as views.py and more. These files are coded to interpret these requests and carry out each files respective functionaility accordingly to support this iventory management system. 


#Overview of how to run 

In order to run this on another device, all the adequate files must be downloaded and opened. These files were generated via a startproject and startapp django-admin commands. Django and PostgreSQL must be installed, this project used PGAdmin, and a database must be running and configured as seen in settings.py. Psycopg2 should be isnatlled via pip install psycopg2. From this, a django migration, python manage.py migrate, for the models to the database must be enacted in order for the connection to be realized and another migration, python manage.py migrate --run-syncdb, to sync the models to the db must be run to transfer the models to become tables in the database. Following this, ensure any other necessarry configurations are carried out and in place. These actions were executed via anaconda powershell. When this is all set up, issuing a command from manage.py in the shell to run the server, python manage.py runserver, can be executed to run the Inventory Management system on a provided url on localhost. 


#Additional notes

The models.py includes an alterations class which was migrated over to the database to be utilized to timestamp each alterations as a bonus in the assignment. Unfortunatley, this project does not make use of this feature due to time contraints so only the product and user tables are utilized for the main functions of the inventory management system. The idea of how this was going to be done can be seen in models file.

The function to update product information in views.py was having issues with the usage of forms so I coded to manually carry out the update process and ensure the attempted updates are valid. 

There are additonal comments in the views and models python files as well which provide detailed insight into the functionality and logic of the code.