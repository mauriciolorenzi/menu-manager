﻿using MenuManagerWebAPI.Models;
using MongoDB.Bson;

namespace MenuManagerWebAPI.Interfaces
{
    public interface IMenuService
    {
        public Response Create(Menu menu);

        public Response GetById(string id);

        public Response GetByName(string name);

        public Response GetAll();

        public Response Update(Menu model);

        public Response Remove(Menu menu);

        public Response Remove(string id);

        public Response RemoveAll();
    }
}