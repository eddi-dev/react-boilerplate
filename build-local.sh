npm run build
docker rm -f web-local-moim
docker rmi -f web-local-moim
docker network create -d bridge local-moim-network
docker build -t web-local-moim .
docker run --name web-local-moim -d --network=local-moim-network -p 3000:3000 web-local-moim