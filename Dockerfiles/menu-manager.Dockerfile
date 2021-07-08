FROM mcr.microsoft.com/dotnet/core/sdk:5 AS build-env
WORKDIR /app
EXPOSE 80

# COPY ./ ./
RUN dotnet restore
RUN dotnet publish -c Release -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/core/aspnet:3.1
WORKDIR /app

COPY --from=build-env /app/out .
ENTRYPOINT ["dotnet", "MenuManagerWebAPI.dll"]