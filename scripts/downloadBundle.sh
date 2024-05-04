#!/bin/bash

# Download the deployment bundle from S3 bucket
aws s3 cp s3://hariali/artifact.zip /home/ubuntu/app/

