Restart, stop or start service while watching a log file (ie `tail -f`).

## Installation

```
$ npm i xtail -g
```

## Usage

When the service name is equal to its log file in /var/log/. For instance the service name is `mongo` and the log is on `/var/log/mongo.log`, use as follows:

```
xtail mongo
```

When the log file is different use:

```
xtail /var/log/my-mongo-log.log the-mongo-service
```

Then while watching the logs use one of these key shortcuts to start/stop/restart:

![ss-2014-02-03T16-24-02.png](http://blog.auth0.com.s3.amazonaws.com/ss-2014-02-03T16-24-02.png)

## License

MIT - Jose Romaniello 2014
