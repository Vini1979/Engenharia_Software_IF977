web: gunicorn assetmanager.wsgi --chdir backend --limit-request-line 8188 --log-file -
worker: celery --workdir backend --app=assetmanager worker -B --loglevel=info
beat: celery --workdir backend --app=assetmanager beat -S redbeat.RedBeatScheduler --loglevel=info
