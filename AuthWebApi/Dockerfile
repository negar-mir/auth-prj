#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:3.1-buster AS build
WORKDIR /src
COPY ["AuthWebApi.csproj", "."]
RUN dotnet restore "./AuthWebApi.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "AuthWebApi.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "AuthWebApi.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "AuthWebApi.dll"]