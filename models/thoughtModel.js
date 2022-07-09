const mongoose = require ('mongoose');
const dateFormat = require("../utils/dateFormat");

const thoughtSchema = mongoose.Schema(
    {
        thoughtText: {
            type: 'string',
            required: true,
            maxLength:280,
        },
        username: {
            type: 'string',
            required: true,
        },
        reaction: {
            type: Schema.Types.ObjectId,
            ref: "reactionModel"
        }
    },
    {
        timestamps: true,
        get: (dateStr) => dateFormat(dateStr),
    },
    {
        toJSON: {
          virtuals: true,
          getters: true,
        },
        id: false,
    }
)
//   Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.
  
thoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
  });

module.exports = thoughtSchema;