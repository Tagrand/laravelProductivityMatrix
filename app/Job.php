<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    protected $guarded = [];

    protected $casts = [
        'name' => 'string',
        'description' => 'string',
        'importance' => 'integer',
        'urgency' => 'integer',
        'is_complete' => 'boolean',
        'is_skipped' => 'boolean',
        'user_id' => 'integer',
        'deadline' => 'dateTime',
        'created_at' => 'dateTime',
        'updated_at' => 'dateTime',
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }
}
