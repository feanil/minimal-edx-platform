
```
cd minimal-edx-platform
docker compose up
cd ../edx-platform
export LMS_CFG=/home/feanil/src/openedx/edx-platform/lms/envs/minimal.yml
export CMS_CFG=/home/feanil/src/openedx/edx-platform/lms/envs/minimal.yml

# Then you should be able to do any of the following

python manage.py lms runserver
python manage.py cms runserver
pytest ...
```


